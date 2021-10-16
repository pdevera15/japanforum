import { ActionTypes } from "../constants/action-types"
import { userLogin } from "../actions/userActions"
const initialState = {
  username: null,
}

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.SET_LOGININFO:
      return action.payLoad
    default:
      return state
  }
}
