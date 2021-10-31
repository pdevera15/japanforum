import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { MyTopics, MyUser } from "../interfaces"

const baseUrl = "http://localhost:8001"

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["Topics", "User"],
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    userLogin: builder.mutation<MyUser, MyUser>({
      query: (userinfo) => ({
        url: "/login",
        method: "POST",
        body: userinfo,
      }),
    }),
    getAllTopics: builder.query<MyTopics[], void>({
      query: () => "/topics",
      providesTags: [{ type: "Topics", id: "LIST" }],
    }),
  }),
})
