import React, { useState } from "react"

function Login() {
  const usernameref = React.useRef<HTMLInputElement>(null)
  const passwordref = React.useRef<HTMLInputElement>(null)
  const [loggedIn, setLoggedIn] = useState<boolean>(false)

  const onSubmitHandler = () => {
    const datas: { [key: string]: any } = {
      username: usernameref.current?.value,
      password: passwordref.current?.value,
    }
    var formBody = []
    for (var property in datas) {
      var encodedKey = encodeURIComponent(property)
      var encodedValue = encodeURIComponent(datas[property])
      formBody.push(encodedKey + "=" + encodedValue)
    }

    fetch("http://localhost:8001/login", {
      method: "post",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formBody.join("&"),
    })
      .then((data) => {
        return data.json()
      })
      .then((result) => {
        if (result.hasOwnProperty("token")) {
          window.localStorage.setItem("xauthToken", result.token)
          setLoggedIn(true)
        } else {
          console.log("ERROR")
        }
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
