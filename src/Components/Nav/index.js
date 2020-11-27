import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

export default function Nav() {
  return (
    <nav className='navigation-container'>
      {/* HOME BUTTON */}
      <Link to='/'>Home</Link>
      {/* SPACE X API */}
      <Link to='/spacex'>Space-X</Link>
      {/* NASA API */}
      <Link to='/nasa'>NASA</Link>
    </nav>
  );
}
