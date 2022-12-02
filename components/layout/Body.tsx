import React from "react";

const Body = ({ children }: { children: React.ReactNode }) => {
  return <div className="max-w-screen-xl w-11/12 mx-auto">{children}</div>;
};

export default Body;
