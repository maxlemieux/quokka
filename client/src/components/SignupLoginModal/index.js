/* eslint-disable arrow-body-style */

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
  MutedSpan,
  VerticalCenterWrapper,
  SubmitButton,
} from './styles';

const SignUpLoginForm = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };
    axios
      .post('/api/auth/register_login', userData)
      .then((res) => {
        props.setUserName(res.data.email);
        props.setSearchResults([]);
      })
      .catch((err) => err);
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
                        <Form.Check type="checkbox" />
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
                <SubmitButton onClick={() => props.setShow(false)} type="submit">Submit</SubmitButton>
            </VerticalCenterWrapper>
        </Form>
  );
};

SignUpLoginForm.propTypes = {
  setUserName: PropTypes.func,
  setShow: PropTypes.func,
};

const SignupLoginModal = (props) => {
  return (
    <Modal show={props.show} onHide={() => props.setShow(false)}>
        <Modal.Header closeButton>
            <Modal.Title>Sign up / Login</Modal.Title>
        </Modal.Header>
        <PaddedContainer>
            <ResponsiveHeader4>With email:</ResponsiveHeader4>
            <br />
            <SignUpLoginForm setUserName={props.setUserName} setShow={props.setShow} />
            <Row style={{ borderBottom: '1px solid #dee2e6' }} />
        </PaddedContainer>
    </Modal>
  );
};
SignupLoginModal.propTypes = {
  show: PropTypes.bool,
  setShow: PropTypes.func,
  setUserName: PropTypes.func,
};

export default SignupLoginModal;
