import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Components/LandingPage/LandingPage";
import Search from "./Components/Search/Search";
import UserProfile from "./Components/UserProfile/UserProfile";
import SavedListings from "./Components/SavedListings/SavedListings";
import CreateListings from "./Components/CreateListing/StepOne/StepOne";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/search" component={Search} />
    <Route path="/user" component={UserProfile} />
    <Route path="/saved-listings" component={SavedListings} />
    <Route path="/create" component={CreateListings} />
  </Switch>
);
