import React, { useState } from "react";
import "./style.css";
import { List, ListItem } from "../List";
import API from "../../utils/API";

export function SearchResults(props) {
  // const [plants, setPlants] = useState([])
  function loadPlants() {
    console.log('loadPlants fired')
    API.getPlants()
      .then(res => {
          console.log('we got back this response from API.getPlants:');
          console.log(res)
          props.setPlants(res.data)
        }
      )
      .catch(err => console.log(err));
  };

  return (
    <div className="list-overflow-container">
      <ul className="list-group">
        {props.searchResults.data && 
           props.searchResults.data.map(result => <Result loadFavorites={props.loadFavorites} loadPlants={loadPlants} result={result} key={result.id} />)}
      </ul>
    </div>
  );
}

export function Result(props) {
  function savePlant(plantId) {
    API.plantDetails(plantId)
      .then(res => API.savePlant(res.data)
        .then(res => {
          props.loadPlants();
          props.loadFavorites();
        })
      )
      .catch(err => console.log(err))
  }

  return (
    <li className="list-group-item">
      <List>
        <ListItem>
          Scientific Name: {props.result.scientific_name}
        </ListItem>
        {props.result.common_name && <ListItem>Common Name: {props.result.common_name}</ListItem>}
      </List>
      <button onClick={() => { savePlant(props.result.id) }}>Save to Favorites</button>
    </li>
  );
}
