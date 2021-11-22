import MainMenu from "../components/MainMenu"
import TopicList from "../components/TopicList"
import { useLocation } from "react-router-dom"
import TopicInfo from "../components/TopicInfo"

function Index() {
  const location = useLocation()
  return (
    <div className="container">
      <MainMenu />
      {location.pathname === "/topic" ? <TopicInfo /> : <TopicList />}
      <div>Stats</div>
    </div>
  )
}

export default Index
