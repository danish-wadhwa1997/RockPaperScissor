import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Result } from "../../configuration/Interfaces";
import MainHeadings from "../atoms/MainHeadings";
import ResultSection from "../atoms/ResultSection";
import SecondaryButton from "../atoms/SecondaryButton";

type AppProps = {
  result: Result;
};

const GameResultContainer = ({ result }: AppProps) => {
  const [winner, setWinner] = useState<string>("Deciding");
  const history = useHistory();
  useEffect(() => {
    if (result.player1 !== result.player2) {
      if (result.player1 > result.player2) {
        setWinner("Player 2");
      } else {
        setWinner("Player 1");
      }
    } else {
      setWinner("Both Player");
    }
  }, [result]);

  const endGame = () => {
    history.replace("/");
  };

  return (
    <div>
      <MainHeadings text="Final Results" />
      <ResultSection result={result} />
      <h3 className="text-center my-5">{`${winner} Wins!`}</h3>
      <div className="text-center my-5">
        <SecondaryButton onClick={endGame}>End Game</SecondaryButton>
      </div>
    </div>
  );
};

export default GameResultContainer;
