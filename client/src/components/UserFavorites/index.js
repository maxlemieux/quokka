/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */

import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import { List, ListItem } from '../List';
import DeleteBtn from '../DeleteBtn';

export default function UserFavorites({ deleteFavorite, favorites }) {
  const image = { url: 'https://via.placeholder.com/300/d3d3d3/000000?text=No%20image%20available' };
  // console.log(favorites);

  if (favorites.length) {
    return (
      <List>
        {favorites.map((favorite) => (
          <ListItem key={favorite.trefle_id}>
          <DeleteBtn onClick={() => deleteFavorite(favorite._id)} />
            {/* <p>Image: {favorite.plantInfo[0].image}</p> */}
            <p>Plant Id: {favorite.trefle_id}</p>
            
            <p>Type of plantInfo: {typeof favorite.plantInfo}</p>
            {/* This breaks when adding a favorite because the plant record doesn't exist quite yet - need a callback from adding the plant */}
            <p>A value from plantInfo: {favorite.plantInfo[0].common_name}</p>
            
            <p>Author: {favorite.author}</p>
            <br />
          </ListItem>
        ))}
      </List>
    );
  }
  return (<h3>No Results to Display</h3>);
}

UserFavorites.propTypes = {
  favorites: PropTypes.array,
  deleteFavorite: PropTypes.func,
};
