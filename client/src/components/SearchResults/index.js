import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './style.css';
import { List, ListItem } from '../List';
import Spinner from '../Spinner';
import API from '../../utils/API';

import { useHistory } from "react-router-dom";

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

      {/* This needs to change if we move to a menu of states/provinces */}
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
  const history = useHistory();

  const [isFavorite, setIsFavorite] = useState(false);

  function checkPlantExists(plantId) {
    API.getPlant(plantId)
      .then((response) => {
        console.log(response.data)
        if (response.data.exists === false) {
          // response.data === {exists: false}
          console.log('Plant does not exist, saving new record to collection')
          savePlant(plantId);
        } else {
          // response.data == 'big plantInfo object'
          console.log('Plant exists, nothing to do')
          createFavorite(plantId);
        }
      });
  }

  function savePlant(plantId) {
    API.plantDetails(plantId)
    .then((res) => {
      res.data.trefle_id = res.data.id;
      res.data.images=[res.data.image_url]
      console.log(`Got response from Trefle for plant with ID ${plantId}:`)
      console.log(res.data)
      console.log('Length of this data:')
      console.log(res.data.length)
      API.savePlant(res.data)
        .then((res) => {
          console.log(res.data)
          createFavorite(plantId);
        })
        .catch((err) => {
          console.log(`Error adding a new plant to our database on id ${plantId}`)
        })
    });
  }

  function createFavorite(plantId) {
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

  // First create a plant then a favorite, if the plant already exists we create a favorite anyway
  function saveFavorite(plantId) {
    API.plantDetails(plantId)
      .then((res) => {
        res.data.trefle_id = res.data.id;
        res.data.images=[res.data.image_url]
        //console.log(res.data.images)
        API.savePlant(res.data)
          .then((res) => {
            console.log(res.data)
            createFavorite(plantId)
          })
          .catch((err) => {
            // If there is an error saving plant on unique Trefle ID, log the error
            // return console.log(Object.keys(err))
            console.log(err)
            if (err.response.data.keyPattern.trefle_id === 1) {  
              console.log("Error adding a new plant because it already exists, adding favorite anyway");
              createFavorite(plantId);
            }
          });
      })
      .catch((err) => err);
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
          if (props.userName !== 'guest') {
            // user is logged in
            // print results of API.getPlant in front end console
            checkPlantExists(props.result.id);
            // saveFavorite(props.result.id);
          } else {
            // user is not logged in, go to signup page
            history.push("/signup");
          }
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
