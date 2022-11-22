import { useState } from 'react'
import { BsDoorClosed, BsDoorOpen } from 'react-icons/bs'
import Header from './Header'
import Nav from './Nav'
import './Navbar.scss'

export default function Navbar() {
  const [menu, setMenu] = useState(false)

  return (
    <div>
      <Header menu={menu} setMenu={setMenu} />
      <Nav menu={menu} setMenu={setMenu} />
    </div>
  )
}
