import React, { useState } from "react";
import { PropsChildren, RulesObj } from "../../configuration/Interfaces";

type Rules = {
  rules: RulesObj;
  changeRules: (value: RulesObj) => any;
};

export const RulesContext = React.createContext<Rules>(null!);
const RulesProvider = ({ children }: PropsChildren) => {
  const [rules, setRules] = useState<RulesObj>({
    Rock: ["Paper"],
    Paper: ["Scissor"],
    Scissor: ["Rock"],
  });

  const changeRules = (value: RulesObj) => {
    setRules(value);
  };
  return (
    <RulesContext.Provider value={{ rules, changeRules }}>
      {children}
    </RulesContext.Provider>
  );
};

export default RulesProvider;
