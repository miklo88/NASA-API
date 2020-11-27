import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
export default function Footer() {
  return (
    <div className='footer-container'>
      <div className='link-container'>
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
      </div>
      <p className='credit'>
        A quick API rundown on cool space shit by MIKLO Design.
      </p>
    </div>
  );
}
