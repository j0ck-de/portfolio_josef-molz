import React from "react";

const Blockquote = ({ children, display }) => {
  if (display === "default") {
    return (
      <blockquote style={{ backgroundColor: "grey", color: "white" }}>
        {children}
      </blockquote>
    );
  }
  if (display === "info") {
    return (
      <blockquote style={{ backgroundColor: "yellow" }}>{children}</blockquote>
    );
  }
  if (display === "warning") {
    return (
      <blockquote style={{ backgroundColor: "red" }}>{children}</blockquote>
    );
  }
  return <blockquote style={{ fontWeight: "bold" }}>{children}</blockquote>;
};

export default Blockquote;
