import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import DisplayPage from 'pages/products'
import CategoryRoute from 'constants/Categories'

const { pJackets, pShirts, pAccessories } = CategoryRoute

const Routes = () => (
  <Switch>
    <Route exact path={'/'} render={() => <Redirect to={`/${pJackets}`} />} />
    <Route exact path={`/${pJackets}`} component={DisplayPage}></Route>
    <Route exact path={`/${pShirts}`} component={DisplayPage}></Route>
    <Route exact path={`/${pAccessories}`} component={DisplayPage}></Route>
  </Switch>
)

export default Routes
