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
        {favorites.map((plant) => (
          <ListItem key={plant.trefle_id}>
              <p>
                <strong>
                {plant.common_name}
              </strong>
              </p>
              <p>
                {plant.scientific_name}
              </p>
            <DeleteBtn onClick={() => deleteFavorite(plant._id)} />
            <br />
            {plant.images[0]
              && <img width="300px" src={plant.images[0].url} alt={plant.scientific_name} />}
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
