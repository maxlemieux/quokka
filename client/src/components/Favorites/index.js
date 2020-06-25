import React, { useEffect, useState } from "react";
import "./style.css";
import { List, ListItem } from "../List";
import API from "../../utils/API";

export function Favorites() {
  function getFavorites() {
    API.findRecent()
      .then(res => console.log(res))
      .catch(err => console.log(err))
  };
  useEffect(() => {
    getFavorites()
  }, []);

  return (
    <div>
      Favorites here
    </div>  
  );
}
