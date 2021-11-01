import { RootState, useAppselector } from "../store/store"

export const GetMyUserInfo = () => {
  return useAppselector((state: RootState) => state.UserInfo)
}

export const GetMyUserInfoToken = () => {
  return useAppselector((state: RootState) => state.UserInfo.token!)
}
