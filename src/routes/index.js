import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "pages/Login";
import Welcome from "pages/Welcome";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/welcome" component={Welcome} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
