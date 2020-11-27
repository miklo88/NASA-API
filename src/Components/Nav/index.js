import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";
export default function Nav() {
  return (
    <>
      <nav className='navigation-container'>
        {/* HOME BUTTON */}
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          {/* SPACE X API */}
          {/* <li>
            <Link to='/spacex'>Space-X</Link>
          </li> */}
          {/* NASA API */}
          <li>
            <Link to='/nasa'>NASA</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
