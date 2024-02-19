import React, { useRef, useEffect } from "react"
import MapLegend from "./MapLegend"
import mapboxgl from "mapbox-gl" // Import mapboxgl
import OverlayContainer from "./OverlayContainer"

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

    map.on("load", () => {
      map.addSource("earthquakes", {
        type: "geojson",
        // Use a URL for the value for the `data` property.
        data: "https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson",
      })

      map.addLayer({
        id: "earthquakes-layer",
        type: "circle",
        source: "earthquakes",
        paint: {
          "circle-radius": 4,
          "circle-stroke-width": 2,
          "circle-color": "red",
          "circle-stroke-color": "white",
        },
      })
    })

    return () => map.remove()
  }, [])

  return (
    <div className="choropleth-map" ref={mapContainer}>
      <OverlayContainer />
    </div>
  )
}

export default ChoroplethMap
