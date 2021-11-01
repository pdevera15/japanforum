import axios from "axios"
import { MyTopics } from "../../interfaces"

export const addTopicApi = (
  param: MyTopics
): Promise<{ result: string; message: string }> => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post("http://localhost:8001/topics", param)
      resolve(res.data)
    } catch (error) {
      console.log(error)
      reject(error)
    }
  })
}
