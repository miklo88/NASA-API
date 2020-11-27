import React, { useState, useEffect } from "react";
import "./Space-X.scss";

export default function SpaceX() {
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
        {/* <img src={launches.links.patch.large} alt='png' /> */}
        <p>Name of Launch: {launches.name}</p>
        {/* <img src={launches.links.flickr.original[0]} alt='jpg' /> */}
        {/* <img src={launches.links.flickr.original[1]} alt='jpg' /> */}
        <p>Local Date and Time of launch: {launches.date_local}</p>
        <p>Flight Number: {launches.flight_number}</p>
        <p>Mission objective: {launches.details}</p>

        <button src={launches.links.webcast}>Youtube link</button>
      </div>
    );
  }
}
