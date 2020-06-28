import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}
List.propTypes = {
  children: PropTypes.any,
};

export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}
ListItem.propTypes = {
  children: PropTypes.any,
};
