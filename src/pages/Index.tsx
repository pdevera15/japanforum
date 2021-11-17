import MainMenu from "../components/MainMenu"
import TopicList from "../components/TopicList"

function Index() {
  return (
    <div className="container">
      <MainMenu />
      <TopicList />
      <div>Stats</div>
    </div>
  )
}

export default Index
