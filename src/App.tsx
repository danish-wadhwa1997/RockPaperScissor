import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import GamePlay from "./components/pages/GamePlay";
import GameSetup from "./components/pages/GameSetup";
import GameTypeProvider from "./components/context/GameTypeContext";
import ChoiceProvider from "./components/context/ChoiceContext";
import RulesProvider from "./components/context/RulesContext";
function App() {
  return (
    <GameTypeProvider>
      <ChoiceProvider>
        <RulesProvider>
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
        </RulesProvider>
      </ChoiceProvider>
    </GameTypeProvider>
  );
}

export default App;
