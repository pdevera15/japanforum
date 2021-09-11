import "./scss/styles.css"
import Header from "./components/Header"
import MainMenu from "./components/MainMenu"
import TopicList from "./components/TopicList"
import { client } from "./graphql/appoloClient"
import { ApolloProvider } from "@apollo/client"

function App() {
  console.log(client)
  return (
    <ApolloProvider client={client}>
      <Header />
      <div className="container">
        <MainMenu />
        <TopicList />
        <div>Stats</div>
      </div>
    </ApolloProvider>
  )
}

export default App
