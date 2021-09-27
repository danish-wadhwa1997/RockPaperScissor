import React from "react";

type AppProps = {
  children: any;
  onClick(event: React.MouseEvent<HTMLButtonElement>): void;
};
const SecondaryButton = (props: AppProps) => {
  return (
    <button type="button" className="btn btn-danger" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default SecondaryButton;
