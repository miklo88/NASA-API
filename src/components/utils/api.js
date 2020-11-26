import React, { useState, useEffect } from "react";

export default function API() {
  // ERROR HANDLER => LOADING HANDLER => NASA PHOTOS
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [photos, setPhotos] = useState([]);

  // FUNCTIONAL COMPONENTDIDMOUNT USING USEEFFECT HOOK
  useEffect(() => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
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
    return <div>Error Will Robinson: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        {/* {photos.map((photo) => ( */}
        {/* <p key={photo.id}> */}
        <p>I should add some props so I can make this easy on myself</p>

        {/* <img src="" alt="nasa-photo"/> */}
        {/* <p>{photo.title}</p> */}
        {/* <p>{photo.copyright}</p> */}
        {/* <p>{photo.explanation}</p> */}
        {/* </p> */}
        {/* ))} */}
      </div>
    );
  }
}
