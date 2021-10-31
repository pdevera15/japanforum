import axios from "axios"
import { MyUser } from "../../interfaces"

export const topicApi = (param: MyUser): Promise<MyUser> => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post("http://localhost:8001/topic", param)
      resolve(res.data)
    } catch (error) {
      console.log(error)
      reject(error)
    }
  })
}
