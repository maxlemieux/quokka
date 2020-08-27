/* eslint-disable arrow-body-style */
import Jumbotron from '../components/Jumbotron';
import React, { useState } from 'react';
import {
  Modal,
  Form,
  Col,
  Row,
} from 'react-bootstrap';
import axios from 'axios';
import PropTypes from 'prop-types';

import {
  PaddedContainer,
  EmailSymbol,
  PasswordSymbol,
  ResponsiveHeader4,
  VerticalCenterWrapper,
  SubmitButton,
} from '../components/LoginModal/styles';

const LoginForm = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };
    axios
      .post('/api/auth/login', userData)
      .then((res) => {

        props.setUserName(res.data.email);
        
        
      })
      .catch((err) =>{
        console.log(err);
        // Use state hook to set error message here
        setLoginError('Oops, something was wrong with that password. Try again');

        return err;
        
      });
  };

  return (
        <Form onSubmit={onSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Row>
                    <Form.Label column xs="2" sm="1">
                        <EmailSymbol />
                    </Form.Label>
                    <Col xs="10" sm="11">
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                            required
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Form.Text className="text-muted">We&apos;ll never share your email with anyone else.</Form.Text>
                    </Col>
                </Row>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Row>
                    <Form.Label column xs="2" sm="1">
                        <PasswordSymbol />
                    </Form.Label>
                    <Col xs="10" sm="11">
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Col>
                </Row>
            </Form.Group>
            <VerticalCenterWrapper>
              <SubmitButton type="submit">Submit</SubmitButton>
              
            </VerticalCenterWrapper>
            {/* Show errors on login here */}
            <Form.Text id='loginErrors' className="text-muted">{loginError}</Form.Text>
        </Form>
  );
};

LoginForm.propTypes = {
  setUserName: PropTypes.func,
};

const Login = (props) => {
  return (
    
    <PaddedContainer>
        <h1>Login</h1>
        <ResponsiveHeader4>With email:</ResponsiveHeader4>
        <br />
        <LoginForm setUserName={props.setUserName} />
    </PaddedContainer>
  );
};
Login.propTypes = {
  setUserName: PropTypes.func,
};

export default Login;