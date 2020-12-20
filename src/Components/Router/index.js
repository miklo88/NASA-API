import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "../Landing";
import NASA from "../NASA";
import SpaceX from "../SpaceX";

function Router() {
  return (
    <>
      <Switch>
        {/* HOME NASA API */}
        <Route exact path='/' component={Landing} />
        {/* HOME NASA API */}
        <Route exact path='/NASA' component={NASA} />
        {/* SPACE X API */}
        <Route exact path='/spacex' component={SpaceX} />
      </Switch>
    </>
  );
}
export default Router;
