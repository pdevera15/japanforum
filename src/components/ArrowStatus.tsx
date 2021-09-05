import React from "react"
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai"
function ArrowStatus() {
  return (
    <div className="arrowstatus">
      <span className="arrowstatus__arrow">
        <AiOutlineArrowUp />
      </span>
      <span>6</span>
      <span>
        <AiOutlineArrowDown />
      </span>
    </div>
  )
}

export default ArrowStatus
