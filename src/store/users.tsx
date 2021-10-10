import { QueryClient, QueryClientProvider, useQuery } from "react-query"

const BASE_URL = "http://localhost:8001/"

const fetchLogin = async () => {
  let reponse = await fetch(`${BASE_URL}/login`)
  return reponse.json
}
export { fetchLogin }
