import React, { useEffect, useRef } from "react"
import * as d3 from "d3"
import "../src/css/Navbar.css"

const Navbar = () => {
  const rightNavbarRef = useRef()

  useEffect(() => {
    const navbarDiv = d3.select(rightNavbarRef.current)

    const searchInput = navbarDiv
      .append("input")
      .attr("type", "text")
      .attr("placeholder", "Search location")

    navbarDiv
      .append("button")
      .text("Search") // Add the button text
      .attr("type", "submit")

    // Cleanup function
    return () => {
      searchInput.remove()
      // Also remove the search button when the component unmounts
      navbarDiv.select("button").remove()
    }
  }, [])

  return (
    <nav className="navbar">
      <div className="left-navbar">
        <div className="logo">CitizAir</div>
        <div className="menu">
          <a href="#" className="menu-item">
            All about Air Pollution
          </a>
          <a href="#" className="menu-item">
            About Us
          </a>
        </div>
      </div>
      <div className="right-navbar" ref={rightNavbarRef}></div>
    </nav>
  )
}

export default Navbar
