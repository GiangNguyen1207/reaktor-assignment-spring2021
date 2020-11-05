import React from "react";
import { Switch, Route } from "react-router-dom";

import Products from "pages/products";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Products}></Route>
    <Route exact path="/shirts" component={Products}></Route>
    <Route exact path="/accessories" component={Products}></Route>
  </Switch>
);

export default Routes;
