import React, { useRef, useEffect } from "react"
import mapboxgl from "mapbox-gl" // Import mapboxgl
import { geoJSON } from "./StockholmData"

const ChoroplethMap = () => {
  const mapContainer = useRef(null)

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoia3ByaWp1biIsImEiOiJjajd4OHVweTYzb2l1MndvMzlvdm90c2ltIn0.J25C2fbC1KpcqIRglAh4sA"
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/kprijun/clsns5ahr006g01pkfe183e2m",
      center: [18.0686, 59.3293],
      zoom: 12,
    })

    // Add navigation control (zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "top-right")

    map.on("load", () => {
      // Add the air quality GeoJSON data as a source
      map.addSource("airQuality", {
        type: "geojson",
        data: geoJSON, // Use your GeoJSON data
      })

      // Add a layer to display air quality measurements
      map.addLayer({
        id: "airQuality-layer",
        type: "heatmap",
        source: "airQuality",
        paint: {
          // Use a property such as measurements_value to determine the circle color
          // Here you might want to create a color scale based on air quality values
          "circle-color": [
            "interpolate",
            ["linear"],
            ["get", "measurements_value"],
            0,
            "#2DC4B2",
            50,
            "#3BB3C3",
            100,
            "#669EC4",
            150,
            "#8B88B6",
            200,
            "#A2719B",
            300,
            "#AA5E79",
          ],
          "circle-radius": 8,
          "circle-stroke-width": 1,
          "circle-stroke-color": "#ffffff",
        },
      })
    })

    const popup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false,
      className: "map-value-popup",
    })

    // Hover interaction
    map.on("mouseenter", "airQuality-layer", (e) => {
      map.getCanvas().style.cursor = "pointer"

      const properties = e.features[0].properties
      const coordinates = e.features[0].geometry.coordinates.slice()
      let htmlContent = "<div>"

      // Iterate over properties to construct HTML content
      Object.entries(properties).forEach(([key, value]) => {
        if (
          key === "measurements_parameter" &&
          ["PM10", "PM2.5", "NO2", "O3"].includes(value)
        ) {
          htmlContent += `<b>${value}: </b>${properties.measurements_value}<br>`
        }
      })

      htmlContent += "</div>"

      // Ensure that if the map is zoomed out such that multiple
      // copies of the feature are visible, the popup appears
      // over the copy being pointed to.
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360
      }

      // Populate the popup and set its coordinates
      // based on the feature found.
      popup.setLngLat(coordinates).setHTML(htmlContent).addTo(map)
    })

    map.on("mouseleave", "airQuality-layer", () => {
      map.getCanvas().style.cursor = ""
      popup.remove()
    })

    return () => map.remove()
  }, [])

  return <div className="left-container" ref={mapContainer}></div>
}

export default ChoroplethMap
