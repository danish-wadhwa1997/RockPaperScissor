import React, { useState } from "react";

type AppProps = {
  choice1: string;
  choice2: string;
  rules: Object;
};

const GamePlay = ({}: AppProps) => {
  const [playing, setPlaying] = useState(true);
  return (
    <div className="p-3">
      game play
      <div className="player1">
        {playing && <React.Fragment></React.Fragment>}
      </div>
      <h4 className="versus">V/S</h4>
      <div className="player2">
        {playing && <React.Fragment></React.Fragment>}
      </div>
    </div>
  );
};

export default GamePlay;
