import React, { useState, useEffect } from "react";
import "./Space-X.scss";
import spaceSuit from "../Imgs/space_suit.jpg";

export default function Launches() {
  // ERROR HANDLER => LOADING HANDLER => SPACE-X LAUNCHES
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [launches, setLaunches] = useState([]);

  // FUNCTIONAL COMPONENTDIDMOUNT USING USEEFFECT HOOK
  useEffect(() => {
    fetch("https://api.spacexdata.com/v4/launches/latest")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setLaunches(result);
        },
        //ERROR HANDLING ON FETCH REQUEST
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  //   CHECKING OUT MY OBJECT
  console.log(launches);

  // RENDERING THE COMPONENT
  if (error) {
    return (
      <div className='error-message'>Error Will Robinson: {error.message}</div>
    );
  } else if (!isLoaded) {
    return <div className='loading-message'>Loading...</div>;
  } else {
    return (
      <div className='payload-container'>
        {/* <img className='patch' src={launches.links.patch.large} alt='png' /> */}
        <h1>
          Name of Launch: <br />
          {launches.name}
        </h1>
        <div className='image-container'>
          <img
            className='launch-image'
            // src={launches.links.flickr.original}
            src={spaceSuit}
            alt='jpg'
          />
          {/* {console.log(launches.links.flickr.original[0])} */}
          <img
            className='launch-image'
            // src={launches.links.flickr.original}
            src={spaceSuit}
            alt='jpg'
          />
        </div>
        <div className='spacex-content'>
          <p>
            Local Date and Time of launch: <br />
            {launches.date_local}
          </p>
          <p>
            Flight Number: <br />
            {launches.flight_number}
          </p>
          <p>
            Mission objective: <br />
            {launches.details}
          </p>
          <ul>
            {launches.cores.map((core) => {
              return (
                <li key={core.id}>
                  <p>
                    Cores: <br />
                    Flight No: {core.flight} <br />
                    Gridfins: {core.gridfins} <br />
                    Landing Attempt: {core.landing_attempt} <br />
                    Landing Success: {core.landing_success} <br />
                    Landing Type: {core.landing_type} <br />
                    Reused: {core.reused} <br />
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
        {/* <button src={launches.links.webcast}>Youtube link</button> */}
      </div>
    );
  }
}
