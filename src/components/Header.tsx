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
        <button>LOGIN</button>
        <button className="button button--signup">SIGN UP</button>
      </div>
    </div>
  )
}

export default Header
