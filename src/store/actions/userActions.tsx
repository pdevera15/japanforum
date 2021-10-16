import { type } from "os"
import { ActionTypes } from "../constants/action-types"

export const userLogin = ({ username, password }: any) => {
  return (dispatch: any, getState: any) => {
    const datas: { [key: string]: any } = {
      username: username,
      password: password,
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
      .then((data) => data.json())
      .then((res) =>
        dispatch({ type: ActionTypes.SET_LOGININFO, payLoad: res })
      )
      .catch(() => {
        dispatch({ type: ActionTypes.FETCH_FAILED })
      })
  }
}
