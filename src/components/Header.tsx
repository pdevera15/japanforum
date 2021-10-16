import React from "react"
import Login from "./Login"
import { useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../store/store"

function Header() {
  const [loginView, setLoginView] = useState(false)
  const store = useSelector((state: RootState) => state)

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
        {!store.user.username ? (
          <>
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
          </>
        ) : (
          store.user.username
        )}
      </div>
    </div>
  )
}

export default Header
