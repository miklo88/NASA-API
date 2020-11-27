import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

export default function Nav() {
  return (
    <nav className='navigation-container'>
      {/* HOME BUTTON */}
      <Link className='link' to='/'>
        Home
      </Link>
      {/* SPACE X API */}
      <Link className='link' to='/spacex'>
        Space-X
      </Link>
      {/* NASA API */}
      <Link className='link' to='/nasa'>
        NASA
      </Link>
    </nav>
  );
}
