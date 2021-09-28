import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import GamePlay from "./components/pages/GamePlay";
import GameSetup from "./components/pages/GameSetup";
import GameTypeProvider from "./components/context/GameTypeContext";
import ChoiceProvider from "./components/context/ChoiceContext";
import RulesProvider from "./components/context/RulesContext";
function App() {
  return (
    <Router>
      <GameTypeProvider>
        <ChoiceProvider>
          <RulesProvider>
            <div className="container-fluid py-5">
              <h1 className="display-1 mb-5 text-center">
                Rock Paper Scissor &amp; more..
              </h1>
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
    </Router>
  );
}

export default App;
