/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */

import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import { List, ListItem } from '../List';
import DeleteBtn from '../DeleteBtn';

export default function UserFavorites({ deleteFavorite, favorites }) {
  if (favorites.length) {
    return (
      <List>
        {favorites.map((favorite) => (
          <ListItem key={favorite.trefle_id}>
              <p>
                <strong>
                {favorite.common_name}
              </strong>
              </p>
              <p>
                {favorite.scientific_name}
              </p>
            <DeleteBtn onClick={() => deleteFavorite(favorite._id)} />
            <br />
            {favorite.images[0]
              && <img width="300px" src={favorite.images[0].url} alt={favorite.scientific_name} />}
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
