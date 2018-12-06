import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <ul id="navbar">
    <NavLink to="/" class="navlink">
      <li> Home </li>
    </NavLink>

    <NavLink to="/about" class="navlink">
      <li> About </li>
    </NavLink>

    <NavLink to="/flashcards" class="navlink">
      <li> FlashCards </li>
    </NavLink>
  </ul>
);

export default Navbar;