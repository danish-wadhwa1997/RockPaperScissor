import React, { useState } from "react";
import MainHeadings from "../atoms/MainHeadings";
import PlayersType from "../molecules/PlayersType";
import { useHistory } from "react-router-dom";
const GameType = () => {
  const history = useHistory();
  const [game, setGame] = useState<string>();
  const onPlay = (value: string) => {
    setGame(value);
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
