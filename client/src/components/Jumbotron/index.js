import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ 
        height: 300, 
        clear: "both", 
        paddingTop: 120, 
        textAlign: "center",
        boxShadow: "0px 5px 5px 5px #78C2AD",
      }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
