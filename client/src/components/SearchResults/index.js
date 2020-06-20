import React from "react";
import "./style.css";

export function SearchResults(props, { children }) {
  // console.log(props);
  return (
    <div className="list-overflow-container">
      {props.searchResults.data && props.searchResults.data.map(result => <Result>{result}</Result>)}
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function Result({ children }) {
  return <li className="list-group-item">{children}</li>;
}
