import React, { useState } from 'react';
import './style.css';
import { List, ListItem } from '../List';
import API from '../../utils/API';
// import { Spinner } from 'react-bootstrap';
// import ReactSpinner from 'react-bootstrap-spinner';

export function SearchResults(props) {
  function loadPlants() {
    API.getPlants()
      .then((res) => {
        props.setPlants(res.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="list-overflow-container">
  {props.showSpinner
    && <div>
    {/* <ReactSpinner type='border' color='primary' size='5' /> */}
    <p>Loading...</p>
    </div>
  }
      <ul className="list-group">
        {props.searchResults.data
          && props.searchResults.data.map((result) => (
            <Result
              userName={props.userName}
              userIp={props.userIp}
              loadFavorites={props.loadFavorites}
              loadPlants={loadPlants}
              result={result}
              key={result.id}
            />
          ))
        }
      </ul>
    </div>
  );
}

export function Result(props) {
  const [isFavorite, setIsFavorite] = useState(false);
  function savePlant(plantId) {
    API.plantDetails(plantId)
      .then((res) => {
        res.data.user_name = props.userName;
        res.data.ip = props.userIp;
        res.data.trefle_id = res.data.id;
        API.savePlant(res.data)
          .then(res => {
            props.loadPlants();
            props.loadFavorites();
          })
      })
      .catch((err) => console.log(err));
  }

  API.getPlant(props.result.id)
    .then((res) => {
      if (res.data.exists) {
        setIsFavorite(true);
      } else {
        setIsFavorite(false);
      }
      console.log(`${props.result.scientific_name} isFavorite Status is ${isFavorite}`);
      // console.log(res)
    })
    .catch((err) => console.log(err));

  return (
    <li className="list-group-item">
      <List>
        {props.result.common_name && <ListItem><b>{props.result.common_name}</b></ListItem>}
        <ListItem>
          Scientific Name: {props.result.scientific_name}
        </ListItem>
      </List>
      {!isFavorite
        && <button onClick={() => { savePlant(props.result.id); }}>Save to Favorites</button>
      }
      {isFavorite
        && <strong>Favorite!</strong>
      }
    </li>
  );
}
