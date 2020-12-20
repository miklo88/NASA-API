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
  // console.log(launches);
  // RETURNING BOOLEANS FROM THE API LAUNCHES.CORES IN OBJ
  let gridfins = launches.cores[0].gridfins ? (
    <li>Gridfins: Yes</li>
  ) : (
    <li>Gridfins: No</li>
  );
  let landingAttempt = launches.cores[0].landing_attempt ? (
    <li>Landing Attempt: Yes</li>
  ) : (
    <li>Landing Attempt: No</li>
  );
  let landingSuccess = launches.cores[0].landing_success ? (
    <li>Landing Success: Yes</li>
  ) : (
    <li>Landing Success: No</li>
  );
  let reused = launches.cores[0].reused ? (
    <li>Reused: Yes</li>
  ) : (
    <li>Reused: No</li>
  );
  // RETURNING BOOLEANS FROM THE API LAUNCHES.CORES IN OBJ

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
          {/* THIS ERRORS OUT WHEN YOU LEAVE THE COMPONENT AND THEN RETURN TO IT */}
          <ul>
            {/* {console.log(launches.cores)} */}
            Cores: <br />
            <li>Flight No: {launches.cores[0].flight}</li>
            <li>{gridfins}</li>
            <li>{landingAttempt}</li>
            {/* {launches.cores[0].landing_success} ? <li>Landing Success: True</li>
            : <li>Landing Success: False</li> */}
            <li>{landingSuccess}</li>
            <li>Landing Type: {launches.cores[0].landing_type}</li>
            <li>{reused}</li>
          </ul>
        </div>
      </div>
    );
  }
}
