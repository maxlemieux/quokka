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

const LoginForm = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };
    axios
      .post('/api/auth/login', userData)
      .then((res) => {
        if (res.status === 200) {
          props.setShow(false);
        }

        if (res.status === 400) {
          console.log(res.status)
        }

        props.setUserName(res.data.email);
        //console.log(typeof res.status)
        // props.setSearchResults([]);
        
      })
      .catch((err) =>{
        console.log(err);
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
              {/* <SubmitButton onClick={() => props.setShow(false)} type="submit">Submit</SubmitButton> */}
              <SubmitButton type="submit">Submit</SubmitButton>
            </VerticalCenterWrapper>
        </Form>
  );
};

LoginForm.propTypes = {
  setSearchResults: PropTypes.func,
  setUserName: PropTypes.func,
  setShow: PropTypes.func,
};

const LoginModal = (props) => {
  return (
    <Modal show={props.show} onHide={() => props.setShow(false)}>
        <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <PaddedContainer>
            <ResponsiveHeader4>With email:</ResponsiveHeader4>
            <br />
            <LoginForm setUserName={props.setUserName}  setShow={props.setShow} />
            {/* Show errors on login here */}
        </PaddedContainer>
    </Modal>
  );
};
LoginModal.propTypes = {
  show: PropTypes.bool,
  setShow: PropTypes.func,
  setUserName: PropTypes.func,
  setSearchResult: PropTypes.func,
};

export default LoginModal;
