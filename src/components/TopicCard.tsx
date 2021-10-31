import { MyTopics } from "../interfaces"

function TopicCard(props: { topic: MyTopics }) {
  return (
    <div className="topiccard">
      <div className="topiccard__title">{props.topic.title}</div>
      <div>
        <div className="topiccard__context">{props.topic.context}</div>
        <div className="topiccard__fromuser">
          CREATED BY <span className="text-hl">{props.topic.author_id}</span>
        </div>
      </div>
    </div>
  )
}

export default TopicCard
