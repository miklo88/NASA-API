import React, { useState, useEffect } from "react";
import "./Nasa.scss";

function NASA() {
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
  //   CHECKING OUT MY OBJECT
  // console.log(photos);

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
        <h1>NASA's Astronomy Picture of the Day</h1>
        <img src={photos.hdurl} alt='jpg' />
        <p>Title: {photos.title}</p>
        <p>Copyright Credit: {photos.copyright}</p>
        <p>Explanation: {photos.explanation}</p>
      </div>
    );
  }
}
export default NASA;
