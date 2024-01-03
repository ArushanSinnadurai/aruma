import React from "react";
import logo from "../../assets/logo.svg";
import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <div id="home">
          <a href="/">
            <img class="logo" src={logo} alt="Home Logo" />
          </a>
        </div>
        <div id="list">
          <a href="/">HOME</a>
          <a href="/aboutus">ABOUT US</a>
          <a href="/blogs">BLOGS</a>
          <a href="/contact">CONTACT INFO</a>
          <a href="/KEYWORDWIP">KEYWORD WIP</a>
          <hr></hr>
        </div>
      </nav>
    );
  }
}

export default Navbar;
