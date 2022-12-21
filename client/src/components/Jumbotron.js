import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 600, clear: "both", paddingTop: 125, textAlign: "center" }}
    >
      {children}
    </div>
  );
}

export default Jumbotron;