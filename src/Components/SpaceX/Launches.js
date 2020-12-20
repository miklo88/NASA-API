import React, { useState, useEffect } from "react";
import "./Space-X.scss";

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
  //   console.log(launches);

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
            // src={launches.links.flickr.large[0]}
            src={launches.links}
            alt='jpg'
          />
          {console.log(launches.links)}
          <img
            className='launch-image'
            // src={launches.links.flickr.large[1]}
            // src={links.patch.small}
            alt='jpg'
          />
        </div>

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

        {/* <button src={launches.links.webcast}>Youtube link</button> */}
      </div>
    );
  }
}
