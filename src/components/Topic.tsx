import { MyTopics } from "../interfaces"
import AddTopic from "./AddTopic"
import ArrowStatus from "./ArrowStatus"
import TopicCard from "./TopicCard"

function Topic(props: { topics: MyTopics[] }) {
  return (
    <>
      {props.topics.map((x: any, key: any) => (
        <div className="container container--topic" key={key}>
          <ArrowStatus />
          <TopicCard topic={x} />
        </div>
      ))}
      <AddTopic />
    </>
  )
}

export default Topic
