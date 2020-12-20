import React, { useState, useEffect } from "react";
import rocket from "../Imgs/SpaceX.jpg";
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
  console.log(launches);
  // console.log(launches.links.patch.small);

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
        <h1>
          Name of Launch: <br />
          {launches.name}
        </h1>

        <img className='launch-image' src={rocket} alt='jpg' />

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
        </div>
      </div>
    );
  }
}
