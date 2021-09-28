import React from "react";
import { GAME_PLAY_STATUS } from "../../configuration/constants";
type AppProps = {
  image: any;
  label: string;
  status: string;
};
const ImageWithLabel = ({ status, image, label }: AppProps) => {
  return (
    <div className="p-2 d-flex flex-column justify-content-around align-items-center">
      <div className="my-2">
        <img src={image} alt={label} width="100px" height="100px" />
      </div>
      <h6 className="display-6 my-2">
        {status === GAME_PLAY_STATUS.END ? label : ""}
      </h6>
    </div>
  );
};

export default ImageWithLabel;
