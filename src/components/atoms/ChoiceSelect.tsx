import React, { useContext, useEffect, useState } from "react";
import { ChoiceContext } from "../context/ChoiceContext";

type AppProps = {
  player: number;
  onChange: (value: string, player: number) => any;
};

const ChoiceSelect = ({ onChange, player }: AppProps) => {
  const { choices } = useContext(ChoiceContext);
  const [options, setOptions] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
    onChange(event.target.value, player);
  };

  useEffect(() => {
    let newOptions = choices.map((item) => item.label);
    setOptions(newOptions);
  }, [choices]);
  return (
    <select
      value={selectedOption}
      className="form-select"
      onChange={handleSelect}
    >
      <option value="">Select...</option>
      {options.length > 0 &&
        options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
    </select>
  );
};

export default ChoiceSelect;
