import React from "react";
import "./Landing.scss";
import space from "../Imgs/space_suit.jpg";

export default function Landing() {
  return (
    <div className='landing'>
      <p className='title'>
        Using NASA and SpaceX's API to have fun displaying cool space stuff.
        <br /> Enjoy.
      </p>
      <img className='landing-photo' src={space} alt='space' />
    </div>
  );
}
