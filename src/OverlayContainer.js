import React, { useEffect, useRef, useState } from "react"
import * as d3 from "d3"
import "../src/css/OverlayContainer.css"

const OverlayContainer = ({ searchText }) => {
  const containerRef = useRef()

  useEffect(() => {
    const containerDiv = d3
      .select(containerRef.current)
      .append("div")
      .attr("class", "overlay-container")
    const infoBox = containerDiv.append("div").attr("class", "info-box")
    const qualityIndicator = infoBox
      .append("div")
      .attr("class", "quality-indicator")

    qualityIndicator
      .append("button")
      .attr("class", "status-button")
      .text("GOOD")
    const h3 = qualityIndicator
      .append("h3")
      .text("Search Place")
      .attr("class", "placeholder")

    const indicesContainer = infoBox
      .append("div")
      .attr("class", "indices-container")
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
      progressBarContainer.append("div").attr("class", "progress-bar-full")
      progressBarContainer
        .append("div")
        .attr("class", "progress-bar-fill")
        .style("width", `${index.value}%`)
    })

    const forecastSection = containerDiv
      .append("div")
      .attr("class", "forecast-section")
    forecastSection
      .append("h4")
      .text("72 Hour AQI Forecast")
      .attr("class", "forecast-heading")

    const forecastData = new Array(3 * 24).fill().map((_, i) => {
      return {
        day: Math.floor(i / 24) + 1,
        hour: i % 24,
        quality: Math.floor(Math.random() * 6) + 1,
      }
    })

    const qualityColorScale = d3
      .scaleOrdinal()
      .domain([1, 2, 3, 4, 5, 6])
      .range(["#55A84F", "#A3C853", "#FFF833", "#F29930", "#E93F33", "#AF2D24"])
    const forecastContainer = forecastSection
      .append("div")
      .attr("class", "forecast-container")

    forecastContainer
      .selectAll(".forecast-square")
      .data(forecastData)
      .enter()
      .append("div")
      .attr("class", "forecast-square")
      .style("background-color", (d) => qualityColorScale(d.quality))

    const barChart = containerDiv
      .append("div")
      .text("Placeholder for bar Chart or some Educational Stuff")
      .attr("class", "bar-chart")

    // Event listener for search button click
    const searchButton = d3.select(".navbar button[type='submit']")
    searchButton.on("click", function () {
      const inputValue = d3
        .select(".navbar input[type='text']")
        .property("value")
      h3.classed("placeholder", !inputValue).text(
        !inputValue ? "Location Placeholder" : inputValue
      )
    })

    return () => {
      containerDiv.remove()
    }
  }, [])

  return <div className="right-container" ref={containerRef} />
}

export default OverlayContainer
