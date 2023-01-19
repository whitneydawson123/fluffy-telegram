import * as React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__title">
        <h1>Whitney Dawson</h1>
        <h2>Software Developer</h2>
      </div>
      <nav className="header__nav">
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}


export default Header
