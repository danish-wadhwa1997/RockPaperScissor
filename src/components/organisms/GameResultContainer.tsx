import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Result } from "../../configuration/Interfaces";
import MainHeadings from "../atoms/MainHeadings";
import PrimaryButton from "../atoms/PrimaryButton";
import ResultSection from "../atoms/ResultSection";

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
      <MainHeadings text="Results" />
      <ResultSection result={result} />
      <h3>{`${winner} Wins!`}</h3>
      <PrimaryButton onClick={endGame}>End Game</PrimaryButton>
    </div>
  );
};

export default GameResultContainer;
