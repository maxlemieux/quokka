/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */

import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default function ActivityFeed(props) {
  return (
    <div>
      <ul>
        {props.data.map((favorite) => (
          <li className='list-overflow-container' key={favorite._id}>
            {favorite.images[1] && <img width='100%' src={favorite.images[1].url} alt={favorite.scientific_name} />}
            {favorite.user_name} quokked {favorite.common_name
              ? favorite.common_name : favorite.scientific_name}
          </li>
        ))}
      </ul>
    </div>
  );
}

ActivityFeed.propTypes = {
  data: PropTypes.array,
};
