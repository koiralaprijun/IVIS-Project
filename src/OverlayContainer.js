import React, { useEffect, useRef } from "react"
import * as d3 from "d3"
import "../src/css/OverlayContainer.css"

const OverlayContainer = () => {
  const containerRef = useRef()

  useEffect(() => {
    // Select the ref and append the overlay container div
    const containerDiv = d3
      .select(containerRef.current)
      .append("div")
      .attr("class", "overlay-container")

    // Append the info box
    const infoBox = containerDiv.append("div").attr("class", "info-box")

    // Append elements to the info box
    infoBox.append("h3").text("Odenplan")
    infoBox.append("button").attr("class", "status-button").text("GOOD")

    // Append the indices container below the 'GOOD' button
    const indicesContainer = infoBox
      .append("div")
      .attr("class", "indices-container")

    // Placeholder data structure
    const indices = [
      { name: "AQI", value: 20 },
      { name: "NoX", value: 70 },
      { name: "PM10", value: 48 },
    ]

    indices.forEach((index) => {
      const indexDiv = indicesContainer.append("div").attr("class", "index")

      indexDiv.append("span").attr("class", "index-name").text(index.name)

      const progressBarContainer = indexDiv
        .append("div")
        .attr("class", "progress-bar-container")

      progressBarContainer.append("div").attr("class", "progress-bar-full") // This is the full bar

      progressBarContainer
        .append("div")
        .attr("class", "progress-bar-fill") // This is the filled part
        .style("width", `${index.value}%`)
    })

    const forecastSection = containerDiv.append("div")
      .attr("class", "forecast-section");

      forecastSection.append("h4")
      .text("3 Day Forecast")
      .attr("class", "forecast-heading");
      
    // Placeholder for 3-day forecast data, with 24 hours each day
    const forecastData = new Array(3 * 24).fill().map((_, i) => {
      return {
        day: Math.floor(i / 24) + 1,
        hour: i % 24,
        // Dummy value for air quality, replace with real data later
        quality: Math.floor(Math.random() * 6) + 1, // Assuming 1-6 scale for quality
      }
    })

    // Map quality to colors (this should match your actual data thresholds)
    const qualityColorScale = d3
      .scaleOrdinal()
      .domain([1, 2, 3, 4, 5, 6])
      .range(["#55A84F", "#A3C853", "#FFF833", "#F29930", "#E93F33", "#AF2D24"])

    // Create a grid for the forecast squares
    const forecastContainer = containerDiv
      .append("div")
      .attr("class", "forecast-container")

    

    forecastContainer
      .selectAll(".forecast-square")
      .data(forecastData)
      .enter()
      .append("div")
      .attr("class", "forecast-square")
      .style("background-color", (d) => qualityColorScale(d.quality))

    // Clean up on unmount
    return () => {
      containerDiv.remove() // This now correctly removes the entire overlay container
    }
  }, [])

  return <div ref={containerRef} />
}

export default OverlayContainer
