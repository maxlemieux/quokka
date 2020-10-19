/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import {
  Form,
  Col,
  Row,
} from 'react-bootstrap';
import axios from 'axios';

import {
  PaddedContainer,
  PasswordSymbol,
  ResponsiveHeader4,
  VerticalCenterWrapper,
  SubmitButton,
} from '../components/LoginModal/styles';

const LoginForm = (props) => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      username,
      password,
    };
    axios
      .post('/api/auth/login', userData)
      .then((res) => {
        // history.push("/");
        console.log('got a response back from /api/auth/login')
        console.log(res)
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
            <Form.Group controlId="formBasicUsername">
                <Row>
                    <Form.Label column xs="2" sm="1">
                        Username
                    </Form.Label>
                    <Col xs="10" sm="11">
                        <Form.Control
                            type="username"
                            placeholder="Enter username"
                            onChange={(e) => {
                              setUsername(e.target.value);
                            }}
                            required
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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

const Login = (props) => {
  return (
    <PaddedContainer>
        <h1>Login</h1>
        <ResponsiveHeader4>With username:</ResponsiveHeader4>
        <br />
        <LoginForm />
    </PaddedContainer>
  );
};

export default Login;