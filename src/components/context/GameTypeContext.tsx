import React, { useState } from "react";
import { GAME_TYPES } from "../../configuration/constants";

interface GameType {
  gameType: string;
  changeGameType: (value: string) => any;
}
export const GameTypeContext = React.createContext<GameType>(null!);

type AppProps = {
  children: React.ReactNode;
};

const GameTypeProvider = ({ children }: AppProps) => {
  const [gameType, setGame] = useState<string>(GAME_TYPES.PLAYER_AND_COMPUTER);

  const changeGameType = (value: string) => {
    setGame(value);
  };

  return (
    <GameTypeContext.Provider value={{ gameType, changeGameType }}>
      {children}
    </GameTypeContext.Provider>
  );
};

export default GameTypeProvider;
