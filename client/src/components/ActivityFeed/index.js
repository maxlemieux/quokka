/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */

import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { Col, Row, Container } from '../Grid'
import { List, ListItem } from '../List';

export default function ActivityFeed(props) {
  console.log(props)

  const image = {url:"http://maestroselectronics.com/wp-content/uploads/2017/12/No_Image_Available.jpg"}
  return (
    <List>
        {props.data.map((favorite) => (
          <ListItem className='list-overflow-container' key={favorite._id}>
                <Container fluid>
                  <Row>
                    <Col size="md-6" >
                      
                      {favorite.images[0] && <img width='50%' src={ favorite.images[0].url }  alt={favorite.scientific_name} />
                        ?favorite.images[0] && <img width='50%' src={ favorite.images[0].url }  alt={favorite.scientific_name}/> 
                        :image && <img width='50%' src ={image.url} alt ={"tex"} />
                      }
                        
                        
                      
                    </Col>
                    <Col size="md-6">
                    {favorite.user_name} quokked {favorite.common_name
                      ? favorite.common_name : favorite.scientific_name}
                    </Col>
                  </Row>
                </Container>
          </ListItem>
        ))}
    </List>
  );
}

ActivityFeed.propTypes = {
  data: PropTypes.array,
};
