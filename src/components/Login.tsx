import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { userLogin } from "../store/actions/userActions"
function Login() {
  const usernameref = React.useRef<HTMLInputElement>(null)
  const passwordref = React.useRef<HTMLInputElement>(null)
  const dispatch = useDispatch()

  const onSubmitHandler = () => {
    dispatch(
      userLogin({
        username: usernameref.current?.value,
        password: passwordref.current?.value,
      })
    )
  }
  return (
    <div className="logincontainer">
      <h1>LOGIN</h1>
      <label htmlFor="username">Username</label>
      <input
        name="username"
        type="text"
        ref={usernameref}
        value="sample_user002"
      />
      <label htmlFor="password">Password</label>
      <input
        name="password"
        type="password"
        ref={passwordref}
        value="sample_user002"
      />
      <button
        className="logincontainer__button"
        onClick={() => onSubmitHandler()}
      >
        LOGIN
      </button>
    </div>
  )
}

export default Login
