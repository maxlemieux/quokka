import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default function ActivityFeed(props) {
  return (
    <div>
      <ul>
        {props.data.map((favorite) => (
          <li key={favorite.id}>{favorite.user_name} quokked {favorite.common_name ? favorite.common_name : favorite.scientific_name}</li>
        ))}
      </ul>
    </div>
  );
}

ActivityFeed.propTypes = {
  data: PropTypes.object,
};
