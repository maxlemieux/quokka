import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './style.css';
import { List, ListItem } from '../List';
import API from '../../utils/API';
// import { Spinner } from 'react-bootstrap';
// import ReactSpinner from 'react-bootstrap-spinner';

export function SearchResults(props) {
  function loadPlants() {
    API.getPlants()
      .then((res) => {
        props.setUserFavorites(res.data);
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
        {props.searchResults
          && props.searchResults.map((result) => (
            <Result
              userName={props.userName}
              userIp={props.userIp}
              loadActivityFeed={props.loadActivityFeed}
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

SearchResults.propTypes = {
  userName: PropTypes.string,
  searchResults: PropTypes.array,
  setUserFavorites: PropTypes.func,
  loadActivityFeed: PropTypes.func,
  showSpinner: PropTypes.bool,
  userIp: PropTypes.string,
};

export function Result(props) {
  const [isFavorite, setIsFavorite] = useState(false);
  // const [imageUrl, setImageUrl] = useState('');
  // function getImageUrl(plantId) {
  //   API.plantDetails(props.result.id)
  //     .then((res) => {
  //       if (res.data.images[0]) {
  //         setImageUrl(res.data.images[0].url);
  //       }
  //     });
  // }
  // useEffect(() => {
  //   getImageUrl(props.result.id);
  // });

  function savePlant(plantId) {
    API.plantDetails(plantId)
      .then((res) => {
        res.data.user_name = props.userName;
        res.data.ip = props.userIp;
        res.data.trefle_id = res.data.id;
        API.savePlant(res.data)
          .then(() => {
            props.loadPlants();
            props.loadActivityFeed();
          });
      })
      .catch((err) => err);
  }

  API.getPlant(props.result.id)
    .then((res) => {
      if (res.data.exists) {
        setIsFavorite(true);
      } else {
        setIsFavorite(false);
      }
    })
    .catch((err) => err);

  return (
    <li className="list-group-item">
      <List>
        {props.result.common_name && <ListItem><b>{props.result.common_name}</b></ListItem>}
        {/* {imageUrl
          && <div className="container"><img src={imageUrl} width="200" alt={props.result.scientific_name} /></div>
        } */}
        <ListItem>
          Scientific Name: {props.result.scientific_name}
        </ListItem>
      </List>
      {!isFavorite
        && <button onClick={() => savePlant(props.result.id)}>Save to Favorites</button>
      }
      {isFavorite
        && <strong>Favorite! This plant is on your list.</strong>
      }
    </li>
  );
}

Result.propTypes = {
  userName: PropTypes.string,
  result: PropTypes.object,
  loadPlants: PropTypes.func,
  loadActivityFeed: PropTypes.func,
  userIp: PropTypes.string,
};
