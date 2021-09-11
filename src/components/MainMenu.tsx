import React from "react"

function MainMenu() {
  return (
    <div className="mainmenu hide-for-mobile">
      <div className="mainmenu__title">MENU</div>
      <div className="mainmenu__links">
        <button className="active">Home</button>
        <button>My Topics</button>
        <button>Explore Topics</button>
      </div>
    </div>
  )
}

export default MainMenu
