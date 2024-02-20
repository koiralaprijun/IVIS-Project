import React from "react"
import "../src/css/MapLegend.css" // Ensure the path is correctly adjusted to where your CSS file is located.

const MapLegend = () => {
  // Legend categories
  const categories = [
    { label: "Good", color: "#55A84F" },
    { label: "Moderate", color: "#A3C853" },
    { label: "Unhealthy for Sensitive Group", color: "#FFF833" },
    { label: "Unhealthy", color: "#F29930" },
    { label: "Very Unhealthy", color: "#E93F33" },
    { label: "Hazardous", color: "#AF2D24" },
  ]

  return (
    <div className="map-legend">
      <h4 className="legend-title">Legend</h4>
      {categories.map((cat, index) => (
        <div key={index} className="legend-category">
          <div
            className="legend-color"
            style={{ backgroundColor: cat.color }}
          ></div>
          <span className="legend-label">{cat.label}</span>
        </div>
      ))}
    </div>
  )
}

export default MapLegend
