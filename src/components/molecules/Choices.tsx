import React, { useRef } from "react";
import { Choice } from "../../configuration/Interfaces";
import PrimaryButton from "../atoms/PrimaryButton";

type AppProps = {
  onAdd(obj: Choice): void;
};

const Choices = ({ onAdd }: AppProps) => {
  const [name, setName] = React.useState<string>("");
  const [fileURL, setFileURL] = React.useState<string>("");
  const uploadRef = useRef<HTMLInputElement>(null!);

  const handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    setName((e.target as HTMLInputElement).value);
  };
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if ((e.target as any).files.length > 0) {
      const file = URL.createObjectURL((e.target as any).files[0]);
      setFileURL(file);
    }
  };

  const handleAdd = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (fileURL && name) {
      let obj: Choice = {
        image: fileURL,
        label: name,
      };
      setName("");
      setFileURL("");
      uploadRef.current.value = "";
      onAdd(obj);
    }
  };

  return (
    <div className="row my-3">
      <div className="col-md-6 my-3">
        <label htmlFor={`choice-image`} className="form-label">
          Choice Image
        </label>
        <input
          className="form-control"
          type="file"
          id={`choice-image`}
          ref={uploadRef}
          onChange={handleUpload}
        />
      </div>
      <div className="col-md-6 my-3">
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
      <div className="text-center">
        <PrimaryButton onClick={handleAdd}>Add</PrimaryButton>
      </div>
    </div>
  );
};

export default Choices;
