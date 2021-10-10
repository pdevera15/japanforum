import React from "react"
import Login from "./Login"
import { useState } from "react"

function Header() {
  const [loginView, setLoginView] = useState(false)

  const loginViewHandler = () => {
    setLoginView(!loginView)
  }
  return (
    <div className="header">
      <div className="header__logo">LOGO</div>
      <div className="header__hamburger hide-for-desktop">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="header__menus hide-for-mobile">
        <button
          className="header__menus--button"
          onClick={() => loginViewHandler()}
        >
          LOGIN
        </button>
        {loginView ? <Login /> : null}
        <button className="button header__menus--button button--signup">
          SIGN UP
        </button>
      </div>
    </div>
  )
}

export default Header
