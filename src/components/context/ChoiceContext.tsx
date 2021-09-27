import React, { useState } from "react";
import { Choice, PropsChildren } from "../../configuration/Interfaces";
import Rock from "../../assets/images/rock.png";
import Paper from "../../assets/images/paper.png";
import Scissor from "../../assets/images/scissor.png";

interface ChoiceContextType {
  choices: Choice[];
  updateChoice: (list: Choice[]) => any;
}

export const ChoiceContext = React.createContext<ChoiceContextType>(null!);
const ChoiceProvider = ({ children }: PropsChildren) => {
  const [choices, setChoices] = useState<Choice[]>([
    { image: Rock, label: "Rock" },
    { image: Paper, label: "Paper" },
    { image: Scissor, label: "Scissor" },
  ]);

  const updateChoice = (list: Choice[]) => {
    setChoices(list);
  };
  return (
    <ChoiceContext.Provider value={{ choices, updateChoice }}>
      {children}
    </ChoiceContext.Provider>
  );
};

export default ChoiceProvider;
