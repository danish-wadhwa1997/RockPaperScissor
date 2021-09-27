import React, { useContext, useState } from "react";
import { GAME_TYPES } from "../../configuration/constants";
import PrimaryButton from "../atoms/PrimaryButton";
import { GameTypeContext } from "../context/GameTypeContext";

type AppProps = {
  onPlay: (value: string) => any;
};

const PlayersType = ({ onPlay }: AppProps) => {
  const game = useContext(GameTypeContext);
  const [gameType, setGameType] = useState<string>(game.gameType);
  const handlePlayersType = (value: string) => {
    setGameType(value);
  };

  const handlePlay = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onPlay(gameType);
  };
  return (
    <div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="playersType"
          id="playerComputer"
          value="1"
          checked={gameType === GAME_TYPES.PLAYER_AND_COMPUTER ? true : false}
          onChange={() => {
            handlePlayersType(GAME_TYPES.PLAYER_AND_COMPUTER);
          }}
        />
        <label className="form-check-label" htmlFor="playerComputer">
          {GAME_TYPES.PLAYER_AND_COMPUTER}
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="playersType"
          id="computerComputer"
          value="2"
          checked={gameType === GAME_TYPES.COMPUTER_AND_COMPUTER ? true : false}
          onChange={() => {
            handlePlayersType(GAME_TYPES.COMPUTER_AND_COMPUTER);
          }}
        />
        <label className="form-check-label" htmlFor="computerComputer">
          {GAME_TYPES.COMPUTER_AND_COMPUTER}
        </label>
      </div>
      <PrimaryButton onClick={handlePlay}>PLAY</PrimaryButton>
    </div>
  );
};

export default PlayersType;
