import React from "react";
import { Switch, BrowserRouter } from "react-router-dom";

import HomePage from "../pages/HomePage";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Events from "../pages/Events";
import MainPage from "../pages/MainPage";

import Route from "./Route";

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/signin" exact component={SignIn} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/events" exact component={Events} />
      <Route path="/mainpage" exact component={MainPage} isPrivate />
    </Switch>
  </BrowserRouter>
);

export default Routes;
