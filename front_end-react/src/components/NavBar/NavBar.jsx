import React from "react";
import "./NavBar.scss";

import images from "../../constants/images";

const NavBar = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
        <ul>
          {["home", "about", "work", "skills", "contact"].map((items) => (
            <li key={`link-${items}`}>
              <div />,<a href={`#${items}`}>{items}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
