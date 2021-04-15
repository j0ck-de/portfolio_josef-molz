import React from "react";

const h1 = ({ children, title }) => {
  if (title) {
    return <h1 style={{ color: "red" }}>{children}</h1>;
  }
  return (
    <h1 className="text-gray-900 font-bold uppercase text-2xl">{children}</h1>
  );
};
const h2 = ({ children, title }) => {
  if (title) {
    return <h2 style={{ color: "var(--color)" }}>{children}</h2>;
  }
  return <h2>{children}</h2>;
};
const h3 = ({ children, title }) => {
  if (title) {
    return <h3 style={{ color: "red" }}>{children}</h3>;
  }
  return <h3>{children}</h3>;
};
const h4 = ({ children, title }) => {
  if (title) {
    return <h4 style={{ color: "red" }}>{children}</h4>;
  }
  return <h4>{children}</h4>;
};

export { h1, h2, h3, h4 };
