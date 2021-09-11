import React from "react"
import ArrowStatus from "./ArrowStatus"
import TopicCard from "./TopicCard"

function Topic(props: any) {
  return (
    <div className="container container--topic">
      <ArrowStatus />
      <TopicCard props={props} />
    </div>
  )
}

export default Topic
