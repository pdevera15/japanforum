import "./scss/styles.css"
import Header from "./components/Header"
import MainMenu from "./components/MainMenu"
import TopicList from "./components/TopicList"

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <MainMenu />
        <TopicList />
        <div>Stats</div>
      </div>
    </>
  )
}

export default App
