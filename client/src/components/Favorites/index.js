import React from "react";
import "./style.css";

export function Favorites(props) {
  return (
    <div>
      <ul>
        {props.data.reverse().map(favorite => <li key={favorite._id}>{favorite.scientific_name}</li>)}
      </ul>
    </div>  
  );
}
