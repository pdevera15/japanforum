import React, { useEffect, useState } from "react"
import Topic from "./Topic"

function TopicList() {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)
  let result
  useEffect(() => {
    fetch("http://localhost:8001/alltopics")
      .then((res) => res.json())
      .then((result) => setData(result))
  }, [])
  return (
    <div className="topiclist">
      {data ? <p>{JSON.stringify(data)}</p> : <p>Loading</p>}
    </div>
  )
}

export default TopicList
