/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */

// import React, { useRef, useEffect } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import { List, ListItem } from '../List';
import DeleteBtn from '../DeleteBtn';

export default function UserFavorites({ deleteFavorite, favorites }) {
  // const messagesEndRef = useRef(null);
  // const scrollToBottom = () => {
  //   if (messagesEndRef.current) {
  //     messagesEndRef.current.scrollIntoView({behavior: "smooth"});
  //   }
  // }
  /* This works well but needs a fixed height layout to avoid jarring the user */
  // useEffect(scrollToBottom, [favorites]);
  const image = {url:"http://maestroselectronics.com/wp-content/uploads/2017/12/No_Image_Available.jpg"}
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
            {favorite.images[0] && <img width='50%' src={ favorite.images[0].url }  alt={favorite.scientific_name} />
              ?favorite.images[0] && <img width='50%' src={ favorite.images[0].url }  alt={favorite.scientific_name}/> 
              :image && <img width='50%' src ={image.url} alt ={"tex"} />
            }
          </ListItem>
        ))}
        {/* <div ref={messagesEndRef} /> */}
      </List>
    );
  }
  return (<h3>No Results to Display</h3>);
}

UserFavorites.propTypes = {
  favorites: PropTypes.array,
  deleteFavorite: PropTypes.func,
};
