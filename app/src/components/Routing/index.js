import {Route, Switch} from "react-router";
import Games from "../Games";
import Players from "../Players";
import React from "react";
import PlayLog from "../PlayLog";

export const Routing = () => {
  return (
    <Switch>
      <Route path="/games">
        <Games/>
      </Route>
      <Route path="/players">
        <Players/>
      </Route>
      <Route path="/playlog">
        <PlayLog/>
      </Route>
    </Switch>
  );
};