import React, { useContext } from "react";
import MainHeadings from "../atoms/MainHeadings";
import { Choice } from "../../configuration/Interfaces";
import Choices from "../molecules/Choices";
import ChoiceView from "../atoms/ChoiceView";
import { useHistory } from "react-router-dom";
import { ChoiceContext } from "../context/ChoiceContext";
import SecondaryButton from "../atoms/SecondaryButton";
const AddChoices = () => {
  const { choices, updateChoice } = useContext(ChoiceContext);
  const history = useHistory();

  const onAdd = (obj: Choice) => {
    let newOptions = [...choices];
    newOptions.push(obj);
    updateChoice(newOptions);
  };

  const handleChoiceDelete = (label: string): any => {
    let newOptions = choices.filter((item) => item.label !== label);
    updateChoice(newOptions);
  };

  const handleNext = () => {
    history.replace("/game-setup/setup-rules");
  };
  return (
    <div>
      <MainHeadings text="Add Choices to select from!" />
      <div className="text-center">
        {choices.length > 0 &&
          choices.map((item) => (
            <ChoiceView
              option={item}
              onDelete={handleChoiceDelete}
              key={item.label}
            />
          ))}
      </div>
      <Choices onAdd={onAdd} />
      <div className="text-center">
        <SecondaryButton onClick={handleNext}>Next</SecondaryButton>
      </div>
    </div>
  );
};

export default AddChoices;
