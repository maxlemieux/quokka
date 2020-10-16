/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */

import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import { List, ListItem } from '../List';
import DeleteBtn from '../DeleteBtn';

export default function UserFavorites({ deleteFavorite }) {
  // const image = { url: 'https://via.placeholder.com/300/d3d3d3/000000?text=No%20image%20available' };

  const favorites = [];
  if (favorites.length) {
    return (
      <List>
        {favorites.map((favorite, index) => (
          <ListItem key={index}>
          <DeleteBtn onClick={() => deleteFavorite(favorite._id)} />
            <h3>{favorite.plantInfo[0].common_name}</h3>
            <p>({favorite.plantInfo[0].scientific_name})</p>
            <p>{favorite.plantInfo[0].common_name} is in the {favorite.plantInfo[0].family_common_name}</p>
            <p><small>Trefle plant ID: {favorite.trefle_id}</small></p>            
            <p><img width="150" height="150" alt="plant" src={favorite.plantInfo[0].images} /></p>
            <p>Author: {favorite.plantInfo[0].author}</p>
            <br />
          </ListItem>
        ))}
      </List>
    );
  }
  return (<h3>No Results to Display</h3>);
}

UserFavorites.propTypes = {
  deleteFavorite: PropTypes.func,
};
