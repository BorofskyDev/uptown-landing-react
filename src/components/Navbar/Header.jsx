import React from 'react'

export default function Header(props) {
  const { menu, setMenu } = props
  return (
    <header className='Header'>
      <h3 className='header___logo'>Uptown Landing</h3>
      <div className='header__btn'>
        <button
          className={`menu__trigger ${menu ? 'menu__close' : null}`}
          onClick={() => setMenu(!menu)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}
