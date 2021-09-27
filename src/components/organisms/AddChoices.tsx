import React, { useState } from "react";
import MainHeadings from "../atoms/MainHeadings";
import { Choice } from "../../configuration/Interfaces";
import Choices from "../molecules/Choices";
import ChoiceView from "../atoms/ChoiceView";
const AddChoices = () => {
  const [choices, setChoices] = useState<Choice[]>([]);

  const onAdd = (obj: Choice) => {
    let newOptions = [...choices];
    newOptions.push(obj);
    setChoices(newOptions);
  };
  const handleChoiceDelete = (label: string): any => {
    let newOptions = choices.filter((item) => item.label !== label);
    setChoices(newOptions);
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
    </div>
  );
};

export default AddChoices;
