import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Products from 'pages/products'
import CategoryRoute from 'constants/Categories'

const { pJackets, pShirts, pAccessories } = CategoryRoute

const Routes = () => (
  <Switch>
    <Route exact path={`/${pJackets}`} component={Products}></Route>
    <Route exact path={`/${pShirts}`} component={Products}></Route>
    <Route exact path={`/${pAccessories}`} component={Products}></Route>
  </Switch>
)

export default Routes
