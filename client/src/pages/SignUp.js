/* eslint-disable arrow-body-style */
import { useHistory } from "react-router-dom";
import React, { useState } from 'react';
import {
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
  MutedSpan,
  VerticalCenterWrapper,
  SubmitButton,
} from '../components/SignUpModal/styles';

const SignUpForm = (props) => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newsletter, setNewsletter] = useState(false);
  const [signUpError, setSignUpError] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
      newsletter,
    };
    axios
      .post('/api/auth/register', userData)
      .then((res) => {
        //console.log(res)
        props.setUserName(res.data.email);
        history.push("/");
      })
      .catch((err,res) => {
        //setSignUpError(err.response.data.errors);
        return err;
      })
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
            <Form.Group controlId="formBasicCheckbox">
                <Row>
                    <Col xs="2" sm="1">
                        <Form.Check 
                          type="checkbox"
                          onChange={(e) => setNewsletter(e.target.value)}
                          />
                    </Col>
                    <Col xs="10" sm="11">
                        <Form.Label>
                            <MutedSpan>
                                Yes, please send me occasional updates about the app
                            </MutedSpan>
                        </Form.Label>
                    </Col>
                </Row>
            </Form.Group>
            <VerticalCenterWrapper>
                <SubmitButton type="submit">Submit</SubmitButton>
            </VerticalCenterWrapper>
            {/* Sign Up errors go here */}
            <Form.Text id='signUpErrors' className="text-muted">{signUpError}</Form.Text>
        </Form>
  );
};

SignUpForm.propTypes = {
  setUserName: PropTypes.func,

};

const SignUp = (props) => {
  return (
        <PaddedContainer>
          <h1>Sign up</h1>
            <ResponsiveHeader4>With email:</ResponsiveHeader4>
            <br />
            <SignUpForm setUserName={props.setUserName}/>
            <p id='signUpErrors'></p>
            
        </PaddedContainer>
  );
};
SignUp.propTypes = {
  setUserName: PropTypes.func,
};

export default SignUp;

