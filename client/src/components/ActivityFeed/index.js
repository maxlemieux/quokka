/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */

import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { Col, Row, Container } from '../Grid';

export default function ActivityFeed(props) {
  return (
    <div>
      <ul>
        {props.data.map((favorite) => (
          <li className='list-overflow-container' key={favorite._id}>
                <Container fluid>
                  <Row>
                  {/* What should I plant column */}
                    <Col size="md-6">
                      {favorite.images[0] && <img width='50%' src={favorite.images[0].url} alt={favorite.scientific_name} />}
                    </Col>
                    <Col size="md-6">
                    {favorite.user_name} quokked {favorite.common_name
                      ? favorite.common_name : favorite.scientific_name}
                    </Col>
                  </Row>
                </Container>
          </li>
        ))}
      </ul>
    </div>
  );
}

ActivityFeed.propTypes = {
  data: PropTypes.array,
};
