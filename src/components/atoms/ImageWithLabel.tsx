import React from "react";
import Rock from "../../assets/images/rock.png";
import { GAME_PLAY_STATUS } from "../../configuration/constants";
type AppProps = {
  image: any;
  label: string;
  status: string;
};
const ImageWithLabel = ({ status, image, label }: AppProps) => {
  return (
    <div className="p-2">
      <img src={image} alt={label} width="100px" height="100px" />
      <h6>{status === GAME_PLAY_STATUS.END ? label : ""}</h6>
    </div>
  );
};

export default ImageWithLabel;
