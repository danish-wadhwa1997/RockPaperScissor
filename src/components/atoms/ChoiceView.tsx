import React from "react";
import { Choice } from "../../configuration/Interfaces";
import SecondaryButton from "./SecondaryButton";
type AppProps = {
  option: Choice;
  onDelete: (label: string) => {};
};

const ChoiceView = ({ option, onDelete }: AppProps) => {
  return (
    <div>
      <img src={option.image} alt={option.label} width="100px" height="100px" />
      <h6>{option.label}</h6>
      <SecondaryButton onClick={(e) => onDelete(option.label)}>
        Delete
      </SecondaryButton>
    </div>
  );
};

export default ChoiceView;
