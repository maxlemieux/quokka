import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './style.css';
import { List, ListItem } from '../List';
import Spinner from '../Spinner';
import API from '../../utils/API';

export function SearchResults(props) {
  return (
    <>
    {props.showSpinner
      && <div>
        <Spinner />
      </div>
    }
    {props.searchResults[0]
        && <div className='list-overflow-container' style={{ paddingTop: '20px', marginTop: '30px' }}>
      <h5>Search Results</h5>
      <p>Minimum temperature {props.userTemp} degrees(F)</p>
      <p>Zip code {props.userZip} (autodetected from public IP address {props.userIp})</p>
      <ul className="list-group">
        {props.searchResults
          && props.searchResults.map((result) => (
            <Result
              userName={props.userName}
              userIp={props.userIp}
              userZip={props.userZip}
              loadActivityFeed={props.loadActivityFeed}
              loadFavorites={props.loadFavorites}
              result={result}
              key={result.id}
            />
          ))
        }
      </ul>
    </div>}
    </>
  );
}

SearchResults.propTypes = {
  userName: PropTypes.string,
  searchResults: PropTypes.array,
  loadFavorites: PropTypes.func,
  loadActivityFeed: PropTypes.func,
  showSpinner: PropTypes.bool,
  userIp: PropTypes.string,
  userZip: PropTypes.string,
  userTemp: PropTypes.string,
};

export function Result(props) {
  const [isFavorite, setIsFavorite] = useState(false);

  function savePlant(plantId) {
    API.plantDetails(plantId)
      .then((res) => {
        res.data.trefle_id = res.data.id;
        res.data.images=[res.data.image_url]
        //console.log(res.data.images)
        API.savePlant(res.data)
          .then(() => {
            props.loadFavorites();
            props.loadActivityFeed();
          });
      })
      .catch((err) => err);
  }  
  
  function saveFavorite(plantId) {
    let newFavorite = {};
    newFavorite.user_name = props.userName;
    newFavorite.ip = props.userIp;
    newFavorite.user_zip = props.userZip;
    newFavorite.trefle_id = plantId;
    API.saveFavorite(newFavorite)
      .then(() => {
        props.loadFavorites();
        props.loadActivityFeed();
      });
  }

  API.getFavorite(props.result.id)
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
        <ListItem>
          Scientific Name: {props.result.scientific_name}
        </ListItem>
        <div style={{ margin: 'auto', paddingTop: '20px' }}>
        {!isFavorite
        && <button onClick={() => {
          savePlant(props.result.id)
          saveFavorite(props.result.id, props.userName);
        }}>
          <i
            className="fa fa-leaf"
            style={{ color: 'green', padding: '5px' }}
            icon="leaf"
          > Add to Garden</i>
        </button>
      }
      {isFavorite
        && <strong>Added!</strong>
      }
      </div>
      </List>
    </li>
  );
}

Result.propTypes = {
  loadFavorites: PropTypes.func,
  userName: PropTypes.string,
  result: PropTypes.object,
  loadPlants: PropTypes.func,
  loadActivityFeed: PropTypes.func,
  userIp: PropTypes.string,
  userZip: PropTypes.string,
};
