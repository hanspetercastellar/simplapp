/*!

=========================================================
* Simplapp Software - v0.1
=========================================================

* Product Page: ####
* Copyright 2020
* Coded by Ing Hans Peter Castellar

=========================================================
*
*/
import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import DashboardLayout from './layouts/Dashboard'
import AuthLayout from './layouts/Auth'
import DashboardContainer from './containers/DashboarContainer'
import AuthContainer from './containers/Auth.container'


//core Fonts
import './assets/fontawesome/css/all.css'

const App = () =>  {
  return(
      <BrowserRouter>
        <Switch>
            <AuthContainer  path="/auth" component={AuthLayout}  />
            <DashboardContainer path="/" component={DashboardLayout}  />
            <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </BrowserRouter>
  )
}

export default App