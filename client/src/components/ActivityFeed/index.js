/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */

import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { Col, Row, Container } from '../Grid';
import { List, ListItem } from '../List';

export default function ActivityFeed(props) {
  const image = { url: 'https://via.placeholder.com/300/d3d3d3/000000?text=No%20image%20available' };
  console.log(props.activityData);
  // if the data is not in the database
  if (props.activityData === {exists: false}) {    
    return (
      <List>
          {props.activityData.map((favorite) => (
            <ListItem className='list-overflow-container' key={favorite._id}>
                  <Container fluid>
                    <Row>
                      <Col size="md-6" >
                        {favorite.images[0]
                          && <img width='100%' src={ favorite.images[0] } alt={favorite.scientific_name} />
                          ? favorite.images[0]
                            && <img width='100%' src={ favorite.images[0]} alt={favorite.scientific_name} />
                          : image
                            && <img width='100%' src={image.url} alt={favorite.scientific_name} />
                        }
                      </Col>
                      <Col size="md-6">
                      {favorite.user_name} ({favorite.user_zip}) quokked {favorite.common_name
                        ? favorite.common_name : favorite.scientific_name}
                      </Col>
                    </Row>
                  </Container>
            </ListItem>
          ))}
      </List>
    )
  } else {
    return (
      <List>
      </List>
    )
  };
}

ActivityFeed.propTypes = {
  activityData: PropTypes.array,
};
