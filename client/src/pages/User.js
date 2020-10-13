import React, { useState } from 'react';
import { Col, Row, Container } from '../components/Grid';
import Jumbotron from '../components/Jumbotron';
import PropTypes from 'prop-types';

function checkPassword(displayName, password1, password2) { 

  // If password not entered 
  if (password1 == '') 
      alert ("Please enter Password"); 
        
  // If confirm password not entered 
  else if (password2 == '') 
      alert ("Please enter confirm password"); 
        
  // If Not same return False.     
  else if (password1 != password2) { 
      alert ("\nPassword did not match: Please try again...") 
      return false; 
  } 

  // If same return True. 
  else{ 
      alert("Password Match") 
      return true; 
  } 
} 


function User(props) {
  const [displayName, setDisplayName] = useState('');
  const [newPassword1, setNewPassword1] = useState('');
  const [newPassword2, setNewPassword2] = useState('');

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>user</h1>
            <form>
              <p>Display name:</p> <input type='text' name='displayName' onChange={(e) => setDisplayName(e.target.value)} placeholder="DisplayName"/>
              <p>New Password:</p> <input type='text' name='password1' onChange={(e) => setNewPassword1(e.target.value)} placeholder="Password"/>
              <p>Confirm Password:</p> <input type='text' name='password2' onChange={(e) => setNewPassword2(e.target.value)} placeholder="Password"/>
              <p><button type='submit' onClick={() => checkPassword(displayName, newPassword1, newPassword2)}>Submit</button></p>
            </form>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}


User.propTypes = {
  setUserName: PropTypes.func,
  userName: PropTypes.string,
};

export default User;
