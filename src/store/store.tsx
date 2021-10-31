import { configureStore } from "@reduxjs/toolkit"
import { api } from "../api/BackEndApi"
import { setupListeners } from "@reduxjs/toolkit/query"
import userReducer from "./features/userSlice"
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux"

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    UserInfo: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

setupListeners(store.dispatch)
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export const useAppDispatch = typeof store.dispatch
export const useAppselector: TypedUseSelectorHook<RootState> = useSelector
