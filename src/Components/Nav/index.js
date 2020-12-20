import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

export default function Nav() {
  return (
    <nav className='navigation-container'>
      {/* LANDING AKA HOME */}
      <Link className='link' to='/'>
        Home
      </Link>
      {/* NASA API */}
      <Link className='link' to='/NASA'>
        NASA
      </Link>
      {/* SPACE X API */}
      <Link className='link' to='/spacex'>
        SpaceX
      </Link>
    </nav>
  );
}
