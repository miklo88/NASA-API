import React, { useState, useEffect } from "react";

export default function API() {
  // ERROR HANDLER => LOADING HANDLER => NASA PHOTOS
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [photos, setPhotos] = useState([]);

  // FUNCTIONAL COMPONENTDIDMOUNT USING USEEFFECT HOOK
  useEffect(() => {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=Y423QMOn9VCVOVmxkHg1ZTg8x8S3kszz7UHwXYvd"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setPhotos(result);
        },
        //ERROR HANDLING ON FETCH REQUEST
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  //   console.log(photos);
  const myObj = photos;
  console.log(myObj);

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
        <img src={myObj.hdurl} alt='jpg' />
        <p>{myObj.title}</p>
        <p>{myObj.copyright}</p>
        <p>{myObj.explanation}</p>
      </div>
    );
  }
}
