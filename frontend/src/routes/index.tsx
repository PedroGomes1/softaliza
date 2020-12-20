import React from "react";
import { Switch, BrowserRouter } from "react-router-dom";

import HomePage from "../pages/HomePage";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Events from "../pages/Events";
import MainPage from "../pages/MainPage";
import EventTypes from "../pages/EventCategory";
import RegisterNewCategory from "../pages/EventCategory/Register";
import EditCategory from "../pages/EventCategory/Edit";
import RegisterEvent from "../pages/Events/Register";
import EditEvent from "../pages/Events/Edit";

import Route from "./Route";

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/signin" exact component={SignIn} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/events" exact component={Events} />
      <Route path="/mainpage" exact component={MainPage} isPrivate />
      <Route path="/event-category" exact component={EventTypes} isPrivate />
      <Route
        path="/register/event-category"
        exact
        component={RegisterNewCategory}
        isPrivate
      />
      <Route
        path="/edit/event-category"
        exact
        component={EditCategory}
        isPrivate
      />
      <Route path="/register/event" exact component={RegisterEvent} isPrivate />
      <Route path="/edit/event" exact component={EditEvent} isPrivate />
    </Switch>
  </BrowserRouter>
);

export default Routes;
