import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "../Landing";
// import X from "../SpaceX";
import NASA from "../NASA";

function Router() {
  return (
    <>
      <Switch>
        {/* HOME */}
        <Route path='/' component={Landing} />
        {/* SPACE X API */}
        {/* <Route path='/spacex' component={X} /> */}
        {/* NASA API */}
        <Route path='/nasa' component={NASA} />
      </Switch>
    </>
  );
}
export default Router;
