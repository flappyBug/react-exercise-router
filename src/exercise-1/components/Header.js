import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <NavLink exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/my-profile">My Profile</NavLink>
        </li>
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
