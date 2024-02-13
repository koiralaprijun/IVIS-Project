import React from "react"
import Navbar from "./Navbar"
import ChoroplethMap from "./ChoroplethMap"
import SlopeChart from "./SlopeChart"
import "./css/App.css"
import "./css/Navbar.css"
import "../src/css/ChoroplethMap.css"
import "../src/css/SlopeChart.css"

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <ChoroplethMap />
        <SlopeChart />
      </div>
    </div>
  )
}

export default App
