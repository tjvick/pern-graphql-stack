import {Route, Switch} from "react-router";
import Games from "../Games";
import Players from "../Players";
import React from "react";

export const Routing = () => {
  return (
    <Switch>
      <Route path="/games">
        <Games/>
      </Route>
      <Route path="/players">
        <Players/>
      </Route>
    </Switch>
  );
};