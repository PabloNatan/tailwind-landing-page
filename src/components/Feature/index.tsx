import React from "react";

type FeatureProps = {
  number: string;
  title: string;
  text: string;
};

const Feature: React.FC<FeatureProps> = ({ number, title, text }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center space-x-2 bg-brightRedSupLight rounded-l-full md:bg-transparent md:space-x-4">
        <span className="bg-brightRed text-white rounded-full py-1 px-4 md:-ml-16 md:px-6">
          {number}
        </span>
        <h3 className="font-bold">{title}</h3>
      </div>
      <p className="text-darkGrayishBlue mt-2">{text}</p>
    </div>
  );
};

export default Feature;
