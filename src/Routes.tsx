import React from "react";
import { Switch, Route } from "react-router-dom";

import Jackets from "pages/jackets/";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Jackets}></Route>
  </Switch>
);

export default Routes;
