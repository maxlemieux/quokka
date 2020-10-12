/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */

import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { Col, Row, Container } from '../Grid';
import { List, ListItem } from '../List';

export default function ActivityFeed({ activityData }) {
  // const image = { url: 'https://via.placeholder.com/300/d3d3d3/000000?text=No%20image%20available' };
  // if the data is not in the database
  console.log(activityData)
  if (activityData.length) {    
    return (
      <List>
          {activityData.map((favorite, index) => (
            <ListItem className='list-overflow-container' key={index}>
              <Container fluid>
                <Row>
                  <Col size="md-6" >
                  <img width='100%' src={favorite.plantInfo[0].images} alt={favorite.scientific_name} />
                  {/* <img width='100%' src="https://via.placeholder.com/300/d3d3d3/000000?text=No%20image%20available" alt={favorite.scientific_name} /> */}
                  </Col>
                  <Col size="md-6">
                  {favorite.user_name} just quokked {favorite.plantInfo[0].common_name
                    ? favorite.plantInfo[0].common_name : favorite.plantInfo[0].scientific_name}
                  </Col>
                </Row>
              </Container>
            </ListItem>
          ))}
      </List>
    )
  } else {
    console.log("no activity data to show")
    return (
      <List>
      </List>
    )
  };
}

ActivityFeed.propTypes = {
  activityData: PropTypes.array,
};
