import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={`${className} mx-auto max-w-7xl`}>{children}</div>
  );
};

export default Container;
