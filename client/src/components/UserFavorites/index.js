/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */

import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import { List, ListItem } from '../List';
import DeleteBtn from '../DeleteBtn';

export default function UserFavorites({ deleteFavorite, favorites }) {
  const image = { url: 'https://via.placeholder.com/300/d3d3d3/000000?text=No%20image%20available' };
  if (favorites.length) {
    return (
      <List>
        {favorites.map((favorite) => (
          <ListItem key={favorite.trefle_id}>
          <DeleteBtn onClick={() => deleteFavorite(favorite._id)} />
              <p>
                <strong>
                {favorite.common_name}
                </strong>
              </p>
              <p>
                {favorite.scientific_name}
              </p>
            <br />
            {favorite.images[0]
              && <img width='50%' src={ favorite.images[0] } alt={favorite.scientific_name} />
              ? favorite.images[0]
                && <img width='50%' src={ favorite.images[0]} alt={favorite.scientific_name} />
              : image
                && <img width='50%' src ={image.url} alt={favorite.scientific_name} />
            }
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
