// File: Navbar.js
import React from "react"
import "../src/css/Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left-navbar">
        <div className="logo">CitizAir</div>
        <div className="menu">
          <div className="menu-item">Home</div>
          <div className="menu-item">About Us</div>
        </div>
      </div>
      <form className="search-form">
        <input type="text" placeholder="Search location" />
        <select>
          <option>PM2.5</option>
          <option>PM10</option>
          <option>NoX</option>
          <option>AQHI</option>
        </select>
        <select>
          <option>Hourly</option>
          <option>Daily</option>
          <option>Yearly</option>
        </select>
      </form>
    </nav>
  )
}

export default Navbar
