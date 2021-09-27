import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { RulesObj, SelectOption } from "../../configuration/Interfaces";
import MainHeadings from "../atoms/MainHeadings";
import PrimaryButton from "../atoms/PrimaryButton";
import { ChoiceContext } from "../context/ChoiceContext";
import { RulesContext } from "../context/RulesContext";
import Rules from "../molecules/Rules";

const SetupRules = () => {
  const history = useHistory();
  const { rules, changeRules } = useContext(RulesContext);
  const { choices } = useContext(ChoiceContext);

  useEffect(() => {
    let newRules = { ...rules };
    choices.forEach((item) => {
      if (!newRules[item.label]) {
        newRules[item.label] = [];
      }
    });
    changeRules(newRules);
  }, []);

  const handleRuleChange = (
    value: SelectOption[],
    label: string,
    rules: RulesObj
  ) => {
    let newValue = value.map((item: SelectOption) => item.value);
    let newRules = { ...rules };
    newRules[label] = newValue;
    changeRules(newRules);
  };

  const handleStart = () => {
    history.replace("/game-play");
  };

  return (
    <div>
      <MainHeadings text="Add Rules" />
      <p>Note: Select the options which can defeat the choice on left</p>
      {choices &&
        choices.map((item) => (
          <Rules
            key={item.label}
            rules={rules}
            onChange={handleRuleChange}
            choices={choices}
            label={item.label}
          />
        ))}
      <PrimaryButton onClick={handleStart}>Start</PrimaryButton>
    </div>
  );
};

export default SetupRules;
