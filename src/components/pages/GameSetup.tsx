import React from "react";
import AddChoices from "../organisms/AddChoices";
import GameType from "../organisms/GameType";
import SetupRules from "../organisms/SetupRules";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
const GameSetup = () => {
  const { path } = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route exact path={`${path}/game-type`} component={GameType} />
        <Route exact path={`${path}/setup-rules`} component={SetupRules} />
        <Route exact path={`${path}/add-choices`} component={AddChoices} />
        <Route path={`${path}/`}>
          <Redirect to={`${path}/game-type`} />
        </Route>
      </Switch>
    </div>
  );
};

export default GameSetup;
