import * as Realm from "realm-web"
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"
export const APP_ID = "forum-0-kbtuw"
const graphqlUri = `https://ap-southeast-1.aws.realm.mongodb.com/api/client/v2.0/app/${APP_ID}/graphql`

export const client = new ApolloClient({
  link: new HttpLink({
    uri: graphqlUri,
    fetch: async (uri: string, options: RequestInit) => {
      const accessToken = await getValidAccessToken()
      options.headers = { Authorization: `Bearer ${accessToken}` }
      return fetch(uri, options)
    },
  }),
  cache: new InMemoryCache(),
})

const app = new Realm.App(APP_ID)

// Gets a valid Realm user access token to authenticate requests
async function getValidAccessToken() {
  // Guarantee that there's a logged in user with a valid access token
  if (!app.currentUser) {
    // If no user is logged in, log in an anonymous user. The logged in user will have a valid
    // access token.
    await app.logIn(Realm.Credentials.anonymous())
  } else {
    // An already logged in user's access token might be stale. To guarantee that the token is
    // valid, we refresh the user's custom data which also refreshes their access token.
    await app.currentUser.refreshCustomData()
  }
  return app.currentUser?.accessToken
}
