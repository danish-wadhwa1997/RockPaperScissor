import React from "react";
import ImageWithLabel from "../atoms/ImageWithLabel";
import { Choice } from "../../configuration/Interfaces";
import ChoiceSelect from "../atoms/ChoiceSelect";
import { GAME_PLAY_STATUS, PLAYER_TYPE } from "../../configuration/constants";
import Rock from "../../assets/images/rock.png";
type AppProps = {
  player1: string;
  player2: string;
  choice1: Choice;
  choice2: Choice;
  status: string;
  onPlay: (value: string, player: number) => any;
};
const PlayGame = ({
  player1,
  player2,
  choice1,
  choice2,
  status,
  onPlay,
}: AppProps) => {
  const handleChoiceChange = (value: string, player: number) => {
    onPlay(value, player);
  };
  return (
    <div>
      <div>
        <ImageWithLabel
          status={status}
          image={
            status === GAME_PLAY_STATUS.START
              ? Rock
              : status === GAME_PLAY_STATUS.END
              ? choice1.image
              : ""
          }
          label={choice1.label}
        />
        {player1 === PLAYER_TYPE.USER && (
          <ChoiceSelect player={1} onChange={handleChoiceChange} />
        )}
        <div>V/S</div>
        <ImageWithLabel
          status={status}
          image={
            status === GAME_PLAY_STATUS.START
              ? Rock
              : status === GAME_PLAY_STATUS.END
              ? choice2.image
              : ""
          }
          label={choice2.label}
        />
        {player2 === PLAYER_TYPE.USER && (
          <ChoiceSelect player={2} onChange={handleChoiceChange} />
        )}
      </div>
    </div>
  );
};

export default PlayGame;
