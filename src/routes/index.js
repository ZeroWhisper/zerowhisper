import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "pages/Login";

// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import Main from "../components/Main";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        {/* <Route exact path="/" component={Teste} /> */}
        {/* <Route exact path="/" component={Main} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
