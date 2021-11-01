import React from "react"
import { api } from "../api/BackEndApi"
import { addTopicApi } from "../store/api/topicApi"
import { GetMyUserInfoToken } from "../store/helper"

function AddTopic({ show }: { show: boolean }) {
  const token = GetMyUserInfoToken()
  const titleref = React.useRef<HTMLInputElement>(null)
  const contextref = React.useRef<HTMLTextAreaElement>(null)
  const showHideClassName = show ? "modal display-block" : "modal display-none"
  const submitHandler = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    const title = titleref.current?.value!
    const context = titleref.current?.value!
    const addTopicResponse = await addTopicApi({ title, context, token })
    console.log(addTopicResponse)
  }
  return (
    <div className={showHideClassName}>
      <div className="addtopiccontainer">
        <label htmlFor="title"> Title </label>
        <input type="text" name="title" ref={titleref} /> <br />
        <textarea rows={8} cols={50} name="context" ref={contextref}></textarea>
        <button
          className="addtopiccontainer__button"
          type="submit"
          onClick={(e) => submitHandler(e)}
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default AddTopic
