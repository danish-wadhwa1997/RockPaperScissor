import React, { useContext, useEffect, useState } from "react";
import {
  GAME_PLAY_STATUS,
  GAME_TYPES,
  PLAYER_TYPE,
} from "../../configuration/constants";
import { Choice, Result } from "../../configuration/Interfaces";
import PrimaryButton from "../atoms/PrimaryButton";
import ResultSection from "../atoms/ResultSection";
import SecondaryButton from "../atoms/SecondaryButton";
import { ChoiceContext } from "../context/ChoiceContext";
import { GameTypeContext } from "../context/GameTypeContext";
import { RulesContext } from "../context/RulesContext";
import PlayGame from "../molecules/PlayGame";

type AppProps = {
  onEnd: (value: Result) => any;
  result: Result;
};

const GamePlayContainer = ({ onEnd, result }: AppProps) => {
  const { gameType } = useContext(GameTypeContext);
  const { rules } = useContext(RulesContext);
  const { choices } = useContext(ChoiceContext);
  const [player1, setPlayer1] = useState<string>(PLAYER_TYPE.RANDOM);
  const [player2, setPlayer2] = useState<string>(PLAYER_TYPE.RANDOM);
  const [choice1, setChoice1] = useState<Choice>({ image: "", label: "" });
  const [choice2, setChoice2] = useState<Choice>({ image: "", label: "" });

  const [status, setStatus] = useState<string>(GAME_PLAY_STATUS.START);
  const [gameCount, setGameCount] = useState<number>(0);
  const [currentResult, setCurrentResult] = useState<Result>(result);

  // to set players based on game type
  useEffect(() => {
    if (gameType === GAME_TYPES.PLAYER_AND_COMPUTER) {
      setPlayer1(PLAYER_TYPE.USER);
      setPlayer2(PLAYER_TYPE.RANDOM);
    } else {
      setPlayer1(PLAYER_TYPE.RANDOM);
      setPlayer2(PLAYER_TYPE.RANDOM);
    }
  }, [gameType]);

  const getRandomIndex = (limit: number): number => {
    return Math.floor(Math.random() * limit);
  };

  const getResults = (option1: string, option2: string) => {
    let newResult = { ...currentResult };
    if (option1 && option2 && option1.toLowerCase() !== option2.toLowerCase()) {
      if (rules[option1].find((item) => item === option2)) {
        newResult.player2 = newResult.player2 + 1;
      } else {
        newResult.player1 = newResult.player1 + 1;
      }
    } else {
      newResult.tie = newResult.tie + 1;
    }
    setCurrentResult(newResult);
  };

  const findChoiceFromLabel = (value: string): Choice => {
    let obj = choices.find(
      (item) => item.label.toLowerCase() === value.toLowerCase()
    );
    const choice: Choice = {
      image: obj ? obj.image : "",
      label: obj ? obj.label : "",
    };
    return choice;
  };

  const startPlay = (choice1: Choice, choice2: Choice) => {
    for (let i = 1; i <= 3; i++) {
      setTimeout(() => {
        if (i === 3) {
          getResults(choice1.label, choice2.label);
          setChoice1(choice1);
          setChoice2(choice2);
          setGameCount(gameCount + 1);
          setStatus(GAME_PLAY_STATUS.END);
        }
      }, i * 1000);
    }
  };

  const onPlayUser = (value: string, player: number) => {
    setStatus(GAME_PLAY_STATUS.PLAYING);
    let choice1: Choice;
    let choice2: Choice;
    if (player === 1) {
      // set choice1
      choice1 = { ...findChoiceFromLabel(value) };
      // random choice2
      choice2 = choices[getRandomIndex(choices.length)];
    } else {
      // set choice2
      choice2 = { ...findChoiceFromLabel(value) };
      // random choice1
      choice1 = choices[getRandomIndex(choices.length)];
    }
    startPlay(choice1, choice2);
  };

  const onPlayRandom = () => {
    setStatus(GAME_PLAY_STATUS.PLAYING);
    // random select choice1
    const choice1 = choices[getRandomIndex(choices.length)];
    // random select choice2
    const choice2 = choices[getRandomIndex(choices.length)];
    startPlay(choice1, choice2);
  };

  const handleOnEnd = (value: Result) => {
    onEnd({ ...value });
  };

  return (
    <div>
      <PlayGame
        player1={player1}
        player2={player2}
        choice1={choice1}
        choice2={choice2}
        onPlay={onPlayUser}
        status={status}
      />
      {player1 === PLAYER_TYPE.RANDOM && player2 === PLAYER_TYPE.RANDOM && (
        <div className="text-center">
          <PrimaryButton onClick={onPlayRandom}>
            {gameCount === 0 ? "PLAY" : "PLAY AGAIN"}
          </PrimaryButton>
        </div>
      )}
      {status === GAME_PLAY_STATUS.END && (
        <React.Fragment>
          <ResultSection result={currentResult} />
          <div className="text-center mt-5">
            <SecondaryButton onClick={() => handleOnEnd(currentResult)}>
              END
            </SecondaryButton>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default GamePlayContainer;
