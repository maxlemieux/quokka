import React from "react";
import "./style.css";

export function Favorites(props) {
  return (
    <div>
      <ul>
        {props.data.map(favorite => (
          <li key={favorite.user_name}>{favorite.user_name} quokked {favorite.scientific_name}</li>
          )
        )}
      </ul>
    </div>  
  );
}
