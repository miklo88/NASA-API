import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

export default function Nav() {
  return (
    <nav className='navigation-container'>
      {/* NASA API */}
      <Link className='link' to='/nasa'>
        NASA
      </Link>
      {/* SPACE X API */}
      <Link className='link' to='/spacex'>
        Space-X
      </Link>
    </nav>
  );
}
