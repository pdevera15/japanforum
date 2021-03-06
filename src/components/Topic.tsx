import { MyTopics } from "../interfaces"
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
    </>
  )
}

export default Topic
