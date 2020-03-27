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

//core Fonts
import './assets/fontawesome/css/all.css'

const App = () =>  {
  return(
      <BrowserRouter>
        <Switch>
          <Route path="/Admin" render={props => <DashboardLayout {...props} />} />
          <Route path="/auth" render={props => <AuthLayout {...props} />} />
        </Switch>
      </BrowserRouter>
  )
}

export default App