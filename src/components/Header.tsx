import Login from "./Login"
import { useEffect, useState } from "react"
import { api } from "../api/BackEndApi"
import { RootState, useAppselector } from "../store/store"

function Header() {
  const [loginView, setLoginView] = useState(false)
  const userInfo = useAppselector((state: RootState) => state.UserInfo)

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
        {!userInfo.token ? (
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
          <p>Welcome {userInfo.username}</p>
        )}
      </div>
    </div>
  )
}

export default Header
