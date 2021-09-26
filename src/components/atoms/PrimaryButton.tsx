import React from "react";

type AppProps = {
  children: any;
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
};

const PrimaryButton = (props: AppProps) => {
  return (
    <button type="button" className="btn btn-dark" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default PrimaryButton;
