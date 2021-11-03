import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { MyUser } from "../../interfaces"

const initialState: MyUser = {
  username: "",
  token: "",
}
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogin: (state, action: PayloadAction<MyUser>) => {
      state.username = action.payload.username
      state.token = action.payload.token
      state.id = action.payload.id
    },
    userLogout: (state) => {},
    userRegister: (state) => {},
  },
})

export const { userLogin } = userSlice.actions

export default userSlice.reducer
