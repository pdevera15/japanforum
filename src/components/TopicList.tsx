import { api } from "../api/BackEndApi"
import Topic from "./Topic"

function TopicList() {
  const { data: MyTopics } = api.useGetAllTopicsQuery()

  return (
    <div className="topiclist">
      {MyTopics ? <Topic topics={MyTopics} /> : <p>Loading</p>}
    </div>
  )
}

export default TopicList
