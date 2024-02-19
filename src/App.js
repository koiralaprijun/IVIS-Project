import React from "react"
import Navbar from "./Navbar"
import ChoroplethMap from "./ChoroplethMap"
import MapLegend from "./MapLegend"
import "./css/App.css"
import "./css/Navbar.css"
import "../src/css/ChoroplethMap.css"

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <MapLegend />
        <ChoroplethMap />
      </div>
    </div>
  )
}

export default App
