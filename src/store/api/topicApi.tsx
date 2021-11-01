import axios from "axios"
import { parseMutationArgs } from "react-query/types/core/utils"
import { MyTopics } from "../../interfaces"

export const addTopicApi = (
  param: MyTopics
): Promise<{ result: string; message: string }> => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post("http://localhost:8001/topics", param, {
        headers: { authorization: `Basic ${param.token}` },
      })
      resolve(res.data)
    } catch (error) {
      reject(error)
    }
  })
}
