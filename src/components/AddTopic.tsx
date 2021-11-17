import React from "react"
import { Redirect } from "react-router-dom"
import { addTopicApi } from "../store/api/topicApi"
import { GetMyUserInfo } from "../store/helper"

type Props = {
  isDisplay: boolean
}

function AddTopic(props: Props) {
  const token = GetMyUserInfo().token!
  const author = GetMyUserInfo().id!
  const titleref = React.useRef<HTMLInputElement>(null)
  const contextref = React.useRef<HTMLTextAreaElement>(null)
  var showHideClassName = props.isDisplay
    ? "modal display-block"
    : "modal display-none"
  const submitHandler = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    const title = titleref.current?.value!
    const context = titleref.current?.value!
    const addTopicResponse = await addTopicApi({
      title,
      context,
      token,
      author_id: author,
    })
    if (addTopicResponse.result === 1) {
      console.log("success")
      return <Redirect to="/post" />
    }
  }
  return (
    <div className={showHideClassName}>
      <div className="addtopiccontainer">
        <label htmlFor="title"> Title </label>
        <input type="text" name="title" ref={titleref} /> <br />
        <label htmlFor="title"> Context </label>
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
