import React from 'react';
import { Col, Row, Container } from '../components/Grid';
import Jumbotron from '../components/Jumbotron';

const styleTabs = {
    border: '3px solid #78C2AD',
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '0px 5px 5px 3px #F3969A',
    padding: '10px 1px 15px 1px',
  };

  const styleLi = {
    marginBottom: '100px',
  };

  const styleInput = {
    maxWidth: '75%',
    marginLeft: '10%',
    border: '1px solid #78C2AD',
  };

function Login() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
