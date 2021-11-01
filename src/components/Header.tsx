import Login from "./Login"
import { useEffect, useState } from "react"
import { api } from "../api/BackEndApi"
import { RootState, useAppselector } from "../store/store"
import AddTopic from "./AddTopic"

function Header() {
  const [loginView, setLoginView] = useState(false)
  const [addTopicView, setAddTopicView] = useState(false)
  const userInfo = useAppselector((state: RootState) => state.UserInfo)

  const loginViewHandler = () => {
    setLoginView(!loginView)
  }

  const addTopicViewHandler = () => {
    setAddTopicView(!addTopicView)
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
            <Login show={loginView} />
            <button className="button header__menus--button button--signup">
              SIGN UP
            </button>
          </>
        ) : (
          <>
            <p className="header__menus--button">Welcome {userInfo.username}</p>
            <br />
            <button
              className="button header__menus--button button--signup"
              onClick={() => addTopicViewHandler()}
            >
              Add Topic
            </button>
            <AddTopic show={addTopicView} />
          </>
        )}
      </div>
    </div>
  )
}

export default Header
