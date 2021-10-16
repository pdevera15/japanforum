import { createStore, compose, applyMiddleware } from "redux"
import { reducers } from "./reducers"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
const store = createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
