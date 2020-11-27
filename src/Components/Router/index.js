import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "../Landing";
// import SpaceX from "../SpaceX";
import NASA from "../NASA";

function Router() {
  return (
    <>
      <Switch>
        {/* HOME */}
        <Route exact path='/' component={Landing} />
        {/* SPACE X API */}
        {/* <Route exact path='/spacex' component={SpaceX} /> */}
        {/* NASA API */}
        <Route exact path='/nasa' component={NASA} />
      </Switch>
    </>
  );
}
export default Router;
