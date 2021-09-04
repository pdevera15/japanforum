import React from "react"
import ArrowStatus from "./ArrowStatus"
function Topic() {
  return (
    <div className="container--topic">
      <ArrowStatus />
      <Topic />
    </div>
  )
}

export default Topic
