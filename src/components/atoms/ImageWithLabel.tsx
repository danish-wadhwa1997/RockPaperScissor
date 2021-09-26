import React from "react";

type AppProps = {
  image: any;
  label: string;
};
const ImageWithLabel = ({ image, label }: AppProps) => {
  return (
    <div className="p-2">
      <img src={image} alt={label} width="100px" height="100px" />
      <h6>{label}</h6>
    </div>
  );
};

export default ImageWithLabel;
