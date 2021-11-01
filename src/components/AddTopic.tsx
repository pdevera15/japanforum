import React from "react"
import { addTopicApi } from "../store/api/topicApi"

function AddTopic({ show }: { show: boolean }) {
  const titleref = React.useRef<HTMLInputElement>(null)
  const contextref = React.useRef<HTMLTextAreaElement>(null)
  const showHideClassName = show ? "modal display-block" : "modal display-none"
  const submitHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    const title = titleref.current?.value!
    const context = titleref.current?.value!
    addTopicApi({ title, context })
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
