import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Nav(props) {
  const { menu, setMenu } = props
  let sidenavMenu = useRef(null)
  let sidenavMenuOverlay = useRef(null)
  let menuLayer = useRef(null)
  let menuTimeline = useRef(null)

  useEffect(() => {
    menuTimeline.current = gsap.timeline({ paused: true })
    menuTimeline.current.fromTo(
      [sidenavMenuOverlay, menuLayer, sidenavMenu],
      { duration: 0, x: '100%' },
      {
        duration: 0.75,
        x: '0%',
        ease: 'power3.inOut',
        stagger: {
          amount: 0.5,
        },
      }
    )
  }, [])

  useEffect(() => {
    menu ? menuTimeline.current.play() : menuTimeline.current.reverse()
  }, [menu])

  return (
    <div className='Menu' ref={(el) => (sidenavMenuOverlay = el)}>
      <div className='Menu__wrapper'>
        <div className='Menu__layer' ref={(el) => (menuLayer = el)}></div>
        <nav className='Menu__nav' ref={(el) => (sidenavMenu = el)}>
          <div className='Menu__top'>
            <ul className='Menu__links'>
              <li className='Menu__link'>
                <a href='#' className='Menu__link--section'>
                  About
                </a>
              </li>
              <li className='Menu__link'>
                <a href='#' className='Menu__link--section'>
                  Features
                </a>
              </li>
              <li className='Menu__link'>
                <a href='#' className='Menu__link--section'>
                  Floorplans
                </a>
              </li>
              <li className='Menu__link'>
                <a href='#' className='Menu__link--section'>
                  Gallery
                </a>
              </li>
            </ul>
          </div>
          <div className='Menu__bottom'>
            <h3 className='Menu__bottom--title'>Connect with us</h3>
            <div className='Menu__auth'>
              <a href='#' className='Menu__contact'>
                Contact
              </a>
              <a href='#' className='Menu__portal'>
                Residents
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}
