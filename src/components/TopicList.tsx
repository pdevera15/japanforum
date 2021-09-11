import React from "react"
import Topic from "./Topic"
import { useQuery, useMutation } from "@apollo/client"
import { POSTS } from "../graphql/operations"

function TopicList() {
  const { data, loading } = useQuery(POSTS)

  return (
    <div className="topiclist">
      {data && !loading ? (
        data.posts.map((topic: any, index: any) => (
          <Topic topic={topic} key={index} />
        ))
      ) : (
        <div>LOADING</div>
      )}
    </div>
  )
}

export default TopicList
