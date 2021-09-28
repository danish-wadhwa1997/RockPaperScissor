import React from "react";
import "./MainHeading.css";
type AppProps = {
  text: string;
};

const MainHeadings = ({ text }: AppProps) => {
  return (
    <div className="main-heading mb-5">
      <h2>{text}</h2>
    </div>
  );
};

export default MainHeadings;
