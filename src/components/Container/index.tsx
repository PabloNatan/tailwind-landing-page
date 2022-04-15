import React from "react";

const Container: React.FC = ({ children }) => {
  return <div className="max-w-7xl p-6 mx-auto xl:px-30">{children}</div>;
};

export default Container;
