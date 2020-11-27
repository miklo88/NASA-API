// import React, { useState, useEffect } from "react";
// import "./Space-X.scss";
// export default function X() {
//   // ERROR HANDLER => LOADING HANDLER => SPACE-X LAUNCHES
//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [launches, setLaunches] = useState([]);

//   // FUNCTIONAL COMPONENTDIDMOUNT USING USEEFFECT HOOK
//   useEffect(() => {
//     fetch("https://api.spacexdata.com/v4/launches/latest")
//       .then((res) => res.json())
//       .then(
//         (result) => {
//           setIsLoaded(true);
//           setLaunches(result);
//         },
//         //ERROR HANDLING ON FETCH REQUEST
//         (error) => {
//           setIsLoaded(true);
//           setError(error);
//         }
//       );
//   }, []);
//   //   CHECKING OUT MY OBJECT
//   console.log(launches);

//   // RENDERING THE COMPONENT
//   if (error) {
//     return (
//       <div className='error-message'>Error Will Robinson: {error.message}</div>
//     );
//   } else if (!isLoaded) {
//     return <div className='loading-message'>Loading...</div>;
//   } else {
//     return (
//       <div className='payload-container'>
//         FILLER
//         {/* <img src={launches.hdurl} alt='jpg' />
//         <p>Title: {launches.title}</p>
//         <p>Date: {launches.date}</p>
//         <p>By: {launches.copyright}</p>
//         <p>What is it?: {launches.explanation}</p> */}
//       </div>
//     );
//   }
// }
