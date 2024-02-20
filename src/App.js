import React, { useState } from "react"
import Navbar from "./Navbar"
import ChoroplethMap from "./ChoroplethMap"
import OverlayContainer from "./OverlayContainer"
import MapLegend from "./MapLegend"

import "./css/App.css"
import "./css/Navbar.css"
import "../src/css/ChoroplethMap.css"

const App = () => {
  const [searchText, setSearchText] = useState("")

  const handleSearch = (value) => {
    setSearchText(value)
  }
  return (
    <div className="App">
      <Navbar onSearch={handleSearch} />
      <div className="content">
        <ChoroplethMap />
        <OverlayContainer searchText={searchText} />
      </div>
      <MapLegend />
    </div>
  )
}

export default App
