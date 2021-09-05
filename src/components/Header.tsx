import React from "react"

function Header() {
  return (
    <div className="header">
      <div className="header__logo">LOGO</div>
      <div className="header__hamburger hide-for-desktop">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="header__menus hide-for-mobile">
        <a href="">LOGIN</a>
        <a href="" className="button button--signup">
          SIGN UP
        </a>
      </div>
    </div>
  )
}

export default Header
