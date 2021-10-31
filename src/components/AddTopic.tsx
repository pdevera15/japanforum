import React from "react"

function AddTopic() {
  const submitHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
  }
  return (
    <div>
      <input type="text" name="title" /> <br />
      <textarea rows={3} cols={50} name="context"></textarea>
      <button type="submit">Submit</button>
    </div>
  )
}

export default AddTopic
