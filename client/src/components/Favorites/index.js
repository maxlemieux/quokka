import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default function Favorites(props) {
  return (
    <div>
      <ul>
        {props.data.map((favorite) => (
          <li key={favorite.id}>{favorite.user_name} quokked {favorite.scientific_name}</li>
        ))}
      </ul>
    </div>
  );
}

Favorites.propTypes = {
  data: PropTypes.object,
};
