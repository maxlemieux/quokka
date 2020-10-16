import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Col,
  Row,
} from 'react-bootstrap';

import {
//   PaddedContainer,
  EmailSymbol,
  PasswordSymbol,
//   ResponsiveHeader4,
//   MutedSpan,
  VerticalCenterWrapper,
  SubmitButton,
} from '../components/SignUpModal/styles';



function User(props) {
//   const [displayName, setDisplayName] = useState('');
  const [newPassword1, setNewPassword1] = useState('');
  const [newPassword2, setNewPassword2] = useState('');
  const [updateError, setUpdateError] = useState('');

  function checkPassword( password1, password2) { 

    // If password not entered 
    if (password1 === '') 
        setUpdateError("Please enter Password"); 
          
    // If confirm password not entered 
    else if (password2 === '') 
        setUpdateError("Please enter confirm password"); 
          
    // If Not same return False.     
    else if (password1 !== password2) { 
        setUpdateError("\nPassword did not match: Please try again...") 
        return false; 
    } 

    // If same return True. 
    else{ 
        setUpdateError("Password Match") 
        return true; 
    } 
  } 
  // return (
  //   <Container fluid>
  //     <Row>
  //       <Col size="md-12">
  //         <Jumbotron>
  //           <h1>user</h1>
  //           <form>
  //             <p>Display name:</p> <input type='text' name='displayName' onChange={(e) => setDisplayName(e.target.value)} placeholder="DisplayName"/>
  //             <p>New Password:</p> <input type='text' name='password1' onChange={(e) => setNewPassword1(e.target.value)} placeholder="Password"/>
  //             <p>Confirm Password:</p> <input type='text' name='password2' onChange={(e) => setNewPassword2(e.target.value)} placeholder="Password"/>
  //             <p><button type='submit' onClick={() => checkPassword(displayName, newPassword1, newPassword2)}>Submit</button></p>
  //           </form>
  //         </Jumbotron>
  //       </Col>
  //     </Row>
  //   </Container>
  // );

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      newPassword1,
      newPassword2,
    };
    if (checkPassword(newPassword1,newPassword2) === true){
      console.log(userData)
    }
    
    // axios
    //   .post('/api/auth/register', userData)
    //   .then((res) => {
    //     //console.log(res)
    //     props.setUserName(res.data.email);
    //     history.push("/");
    //   })
    //   .catch((err,res) => {
    //     setSignUpError(err.response.data.errors);
    //     return err;
    //   })
  };

  return (
        <Form onSubmit={onSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Row>
                    <Form.Label column xs="2" sm="1">
                        <EmailSymbol />
                    </Form.Label>
                    <Col xs="10" sm="11">
                        {/* <Form.Control
                            type="email"
                            placeholder="Enter email"
                            onChange={(e) => {
                              setEmail(e.target.value);
                            }}
                            required
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
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
                            onChange={(e) => setNewPassword1(e.target.value)}
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
                            onChange={(e) => setNewPassword2(e.target.value)}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Col>
                </Row>
            </Form.Group>
            <VerticalCenterWrapper>
                <SubmitButton type="submit">Submit</SubmitButton>
            </VerticalCenterWrapper>
            {/* Update errors go here */}
            <Form.Text id='updateErrors' className="text-muted">{updateError}</Form.Text>
        </Form>
  );
}






User.propTypes = {
  setUserName: PropTypes.func,
  userName: PropTypes.string,
};

export default User;
