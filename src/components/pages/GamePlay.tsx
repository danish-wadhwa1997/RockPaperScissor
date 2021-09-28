import React, { useState } from "react";
import { Result } from "../../configuration/Interfaces";
import GamePlayContainer from "../organisms/GamePlayContainer";
import GameResultContainer from "../organisms/GameResultContainer";

const GamePlay = () => {
  const [endGame, setEndGame] = useState<boolean>(false);
  const [result, setResult] = useState<Result>({
    player1: 0,
    tie: 0,
    player2: 0,
  });

  const onEnd = (value: Result) => {
    setEndGame(true);
    setResult(value);
  };
  return (
    <div className="p-3">
      {endGame ? (
        <GameResultContainer result={result} />
      ) : (
        <GamePlayContainer result={result} onEnd={onEnd} />
      )}
    </div>
  );
};

export default GamePlay;
