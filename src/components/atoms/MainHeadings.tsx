import React from "react";

type AppProps = {
  text: string;
};

const MainHeadings = ({ text }: AppProps) => {
  return (
    <div className="main-heading">
      <h3>{text}</h3>
    </div>
  );
};

export default MainHeadings;
