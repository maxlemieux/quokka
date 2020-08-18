import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import SignupLoginModal from '../SignupLoginModal';
import LoginModal from '../LoginModal';
import SignUpModal from '../SignUpModal';

const Nav = (props) => {
  const [show, setShow] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const imgStyle = {
    width: '65px',
    height: '65px',
    margin: '0px 10px 25px 0px',
    position: 'absolute',
  };
  const wordStyle = {
    position: 'relative',
    padding: '12px 0px 0px 75px',
    color: 'cornsilk',
    fontSize: '30px',
    fontFamily: 'Chalkduster, fantasy',
  };
  const navStyle = {
    boxShadow: '0px 5px 10px 5px pink',
    marginBottom: '30px',
  };
  const styleLogin = {
    // position: 'absolute',
    // left: '80%',
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between sticky-top"
      style= {navStyle}
      >
      <a className="navbar-brand" href="/"><img src="../img/quokka-logo.png" alt="logo"style={imgStyle}
      />
          <p style={wordStyle}>quokka</p>
      </a>

      <div style={styleLogin}>
      <p>Welcome, <b>{props.userName}</b>&nbsp;
      <SignupLoginModal
        show={show}
        setShow={setShow}
        setSearchResults={props.setSearchResults}
        setUserName={props.setUserName}
      />
      <SignUpModal
        show={showSignUp}
        setShow={setShowSignUp}
        setSearchResults={props.setSearchResults}
        setUserName={props.setUserName}
      />
      <LoginModal
        show={showLogin}
        setShow={setShowLogin}
        setSearchResults={props.setSearchResults}
        setUserName={props.setUserName}
      />
      {props.userName === 'guest'
        && <button onClick={() => setShowLogin(true)}>Login</button>
      }
      {props.userName !== 'guest'
        && <button
          onClick={
            () => {
              axios.get('/api/auth/logout')
                .then(
                  () => {
                    props.setUserName('guest');
                    props.setSearchResults([]);
                  },
                );
            }
          }
        >Logout</button>
      }
      {props.userName === 'guest'
        && <>or <button onClick={() => setShowSignUp(true)}>Sign Up</button></>
      }
      </p>
      </div>
    </nav>
  );
};

Nav.propTypes = {
  userName: PropTypes.string,
  setUserName: PropTypes.func,
  setSearchResults: PropTypes.func,
};

export default Nav;
