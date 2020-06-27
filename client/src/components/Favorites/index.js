import React from "react";
import "./style.css";

export function Favorites(props) {
  return (
    <div>
      <ul>
        {props.data.map(favorite => <li key={favorite._id}>{favorite.user_name} quokked {favorite.scientific_name}</li>)}
      </ul>
    </div>  
  );
}
