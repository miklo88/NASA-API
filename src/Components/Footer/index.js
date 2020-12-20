import React from "react";
import "./Footer.scss";
export default function Footer() {
  return (
    <div className='footer-container'>
      <div className='link-container'>
        <p className='credit'>
          A quick API website on cool space shit by MIKLO Design.
        </p>
        {/* miklo link */}
        <a className='link' href='https://miklo.netlify.app/'>
          Visit MIKLO
        </a>
      </div>
    </div>
  );
}
