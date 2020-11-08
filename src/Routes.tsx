import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Products from 'pages/products'
import CategoryRoute from 'constants/Categories'

const { jackets, shirts, accesssories } = CategoryRoute

const Routes = () => (
  <Switch>
    <Route exact path={`/${jackets}`} component={Products}></Route>
    <Route exact path={`/${shirts}`} component={Products}></Route>
    <Route exact path={`/${accesssories}`} component={Products}></Route>
  </Switch>
)

export default Routes
