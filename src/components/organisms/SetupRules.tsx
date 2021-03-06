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

  const validateRules = (value: RulesObj): boolean => {
    let isValid = true;
    Object.keys(value).forEach((item) => {
      if (value[item].length <= 0) {
        isValid = false;
      }
    });
    return isValid;
  };

  const handleStart = () => {
    if (validateRules(rules)) {
      history.replace("/game-play");
    } else {
      alert("Invalid Rules");
    }
  };

  return (
    <div>
      <MainHeadings text="Add Rules" />
      <p className="lead text-center">
        Note: Select the options which can defeat the label.
      </p>
      <div className="row justify-content-center">
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
      </div>
      <div className="text-center mt-5">
        <PrimaryButton onClick={handleStart}>Start</PrimaryButton>
      </div>
    </div>
  );
};

export default SetupRules;
