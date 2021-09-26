import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import GamePlay from "./components/pages/GamePlay";
import GameSetup from "./components/pages/GameSetup";
function App() {
  return (
    <div>
      <h1>Rock Paper Scissor &amp; more..</h1>
      <Switch>
        <Route path="/game-setup" component={GameSetup} />
        <Route exact path="/game-play" component={GamePlay} />
        <Route path="/**">
          <Redirect to="/game-setup" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
