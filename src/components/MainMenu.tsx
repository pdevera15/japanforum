import React from "react"

function MainMenu() {
  return (
    <div className="mainmenu hide-for-mobile">
      <div className="mainmenu__title">MENU</div>
      <div className="mainmenu__links">
        <a href="" className="active">
          Home
        </a>
        <a href="">My Topics</a>
        <a href="">Explore Topics</a>
      </div>
    </div>
  )
}

export default MainMenu
