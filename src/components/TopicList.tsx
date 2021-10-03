import React, { useEffect, useState } from "react"
import Topic from "./Topic"

function TopicList() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch("http://localhost:8001/alltopics").then((data) => {
      console.log(data)
    })
  }, [])

  return <div className="topiclist"></div>
}

export default TopicList
