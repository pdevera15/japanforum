import React from "react"
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai"
function ArrowStatus() {
  return (
    <div className="arrowstatus">
      <span className="arrowstatus__arrow">
        <button>
          <AiOutlineArrowUp />
        </button>
      </span>
      <span>6</span>
      <span>
        <button>
          <AiOutlineArrowDown />
        </button>
      </span>
    </div>
  )
}

export default ArrowStatus
