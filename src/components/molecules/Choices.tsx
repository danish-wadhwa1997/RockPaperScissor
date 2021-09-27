import React from "react";
import { Choice } from "../../configuration/Interfaces";
import PrimaryButton from "../atoms/PrimaryButton";

type AppProps = {
  onAdd(obj: Choice): void;
};

const Choices = ({ onAdd }: AppProps) => {
  const [name, setName] = React.useState<string>("");
  const [fileURL, setFileURL] = React.useState<string>("");
  const handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    setName((e.target as HTMLInputElement).value);
  };
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if ((e.target as any).files.length > 0) {
      const file = URL.createObjectURL((e.target as any).files[0]);
      console.log(file);
      setFileURL(file);
    }
  };

  const handleAdd = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (fileURL && name) {
      let obj: Choice = {
        image: fileURL,
        label: name,
      };
      onAdd(obj);
    }
  };

  return (
    <div className="row my-3">
      <div className="col-md-6">
        <label htmlFor={`choice-image`} className="form-label">
          Choice Image
        </label>
        <input
          className="form-control"
          type="file"
          id={`choice-image`}
          onChange={handleUpload}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor={`choice-label`} className="form-label">
          Choice Name
        </label>
        <input
          type="text"
          className="form-control"
          id={`choice-label`}
          onChange={handleNameChange}
          value={name}
        />
      </div>
      <PrimaryButton onClick={handleAdd}>Add</PrimaryButton>
    </div>
  );
};

export default Choices;
