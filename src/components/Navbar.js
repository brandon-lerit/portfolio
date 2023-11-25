import React from 'react';
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className = "navbar">
        <div className = "navdescription">
            <p className = "navname">Brandon Lerit</p>
            <p className = "navmajor">Information Science & CS @ Cornell</p>
        </div>

        <ul className = "links">
            <li>
                <a href = "#home">Home</a>
            </li>
            <li>
                <a href = "#aboutme">About Me</a>
            </li>
            <li>
                <a href = "#experience">Experience</a>
            </li>

            <li>
                <a href = "#contact">Contact</a>
            </li>
        </ul>
    </div>
  )
}

export default Navbar