import React from "react";
import { Choice } from "../../configuration/Interfaces";
import SecondaryButton from "./SecondaryButton";
type AppProps = {
  option: Choice;
  onDelete: (label: string) => {};
};

const ChoiceView = ({ option, onDelete }: AppProps) => {
  return (
    <div className="row my-2 justify-content-center align-items-center">
      <div className="col">
        <img
          src={option.image}
          alt={option.label}
          width="100px"
          height="100px"
        />
      </div>
      <h6 className="col display-6 ">{option.label}</h6>
      <div className="col">
        <SecondaryButton onClick={(e) => onDelete(option.label)}>
          Delete
        </SecondaryButton>
      </div>
    </div>
  );
};

export default ChoiceView;
