import React, { useState } from "react";
import MainHeadings from "../atoms/MainHeadings";
import { Choice } from "../../configuration/Interfaces";
import Choices from "../molecules/Choices";
import ChoiceView from "../atoms/ChoiceView";
import PrimaryButton from "../atoms/PrimaryButton";
import { useHistory } from "react-router-dom";
const AddChoices = () => {
  const [choices, setChoices] = useState<Choice[]>([]);
  const history = useHistory();
  const onAdd = (obj: Choice) => {
    let newOptions = [...choices];
    newOptions.push(obj);
    setChoices(newOptions);
  };

  const handleChoiceDelete = (label: string): any => {
    let newOptions = choices.filter((item) => item.label !== label);
    setChoices(newOptions);
  };

  const handleNext = () => {
    console.log(choices);
    history.replace("/game-setup/setup-rules");
  };
  return (
    <div>
      <MainHeadings text="Add Choices to select from!" />
      {choices.length > 0 &&
        choices.map((item) => (
          <ChoiceView
            option={item}
            onDelete={handleChoiceDelete}
            key={item.label}
          />
        ))}
      <Choices onAdd={onAdd} />

      <PrimaryButton onClick={handleNext}>Next</PrimaryButton>
    </div>
  );
};

export default AddChoices;
