import React from "react"
import { useDispatch } from "react-redux"
import { userLogin } from "../store/features/userSlice"
import { userLoginApi } from "../store/api/userApi"
import { RootState, useAppselector } from "../store/store"

function Login({ show }: { show: boolean }) {
  const showHideClassName = show ? "modal display-block" : "modal display-none"
  const usernameref = React.useRef<HTMLInputElement>(null)
  const passwordref = React.useRef<HTMLInputElement>(null)
  const userInfo = useAppselector((state: RootState) => state.UserInfo)
  const dispatch = useDispatch()

  const onSubmitHandler = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    const loginResponse = await userLoginApi({
      username: usernameref.current?.value,
      password: passwordref.current?.value,
    })
    dispatch(userLogin(loginResponse))
  }

  return (
    <div className={showHideClassName}>
      <div className="logincontainer">
        <h1>{userInfo ? <div>Loading</div> : JSON.stringify(userInfo)}</h1>
        <label htmlFor="username">Username</label>
        <input
          name="username"
          type="text"
          ref={usernameref}
          defaultValue="sample_user002"
        />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          ref={passwordref}
          defaultValue="sample_user002"
        />
        <button
          className="logincontainer__button"
          onClick={(e) => onSubmitHandler(e)}
        >
          LOGIN
        </button>
      </div>
    </div>
  )
}

export default Login
