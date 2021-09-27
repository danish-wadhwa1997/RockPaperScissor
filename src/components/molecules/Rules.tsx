import React from "react";
import Select from "react-select";
import { Choice, RulesObj, SelectOption } from "../../configuration/Interfaces";
type AppProps = {
  rules: RulesObj;
  choices: Choice[];
  label: string;
  onChange: (option: any, label: string, rules: RulesObj) => any;
};

const Rules = ({ rules, choices, label, onChange }: AppProps) => {
  const getFilteredOptions = (
    list: Choice[],
    label: string,
    rules: RulesObj
  ): any => {
    let newList = [];
    newList = list
      ? list
          .filter((item) => {
            return (
              item.label.toLowerCase() !== label.toLowerCase() &&
              rules[item.label] &&
              !rules[item.label].includes(label)
            );
          })
          .map((item) => {
            return { label: item.label, value: item.label };
          })
      : [];
    return newList;
  };

  const transformList = (list: string[]): SelectOption[] => {
    let newList = [];
    newList = list ? list.map((item) => ({ label: item, value: item })) : [];
    return newList;
  };

  return (
    <div>
      <div>{label}:</div>
      <Select
        options={getFilteredOptions(choices, label, rules)}
        isMulti
        onChange={(value) => onChange(value, label, rules)}
        defaultValue={transformList(rules[label])}
      />
    </div>
  );
};

export default Rules;
