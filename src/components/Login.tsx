import React, { useState } from "react"

function Login() {
  const usernameref = React.useRef<HTMLInputElement>(null)
  const passwordref = React.useRef<HTMLInputElement>(null)

  const onSubmitHandler = () => {
    const datas = {
      username: usernameref.current?.value,
      password: passwordref.current?.value,
    }
    let responsedata
    fetch("http://localhost:8001/login", {
      method: "post",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: JSON.stringify(datas),
    }).then((data) => {
      console.log(data.json())
    })
  }
  return (
    <div className="logincontainer">
      <h1>LOGIN</h1>
      <label htmlFor="username">Username</label>
      <input name="username" type="text" ref={usernameref} />
      <label htmlFor="password">Password</label>
      <input name="password" type="password" ref={passwordref} />
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
