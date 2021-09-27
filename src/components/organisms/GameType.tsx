import React, { useContext } from "react";
import MainHeadings from "../atoms/MainHeadings";
import PlayersType from "../molecules/PlayersType";
import { useHistory } from "react-router-dom";
import { GameTypeContext } from "../context/GameTypeContext";

const GameType = () => {
  const history = useHistory();
  const game = useContext(GameTypeContext);

  const onPlay = (value: string) => {
    game.changeGameType(value);
    history.push("/game-setup/add-choices");
  };
  return (
    <div>
      <MainHeadings text="Choose Game Type" />
      <PlayersType onPlay={onPlay} />
    </div>
  );
};

export default GameType;
