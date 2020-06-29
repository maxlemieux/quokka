import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import SignupLoginModal from '../SignupLoginModal';

const Nav = (props) => {
  const [show, setShow] = useState(false);

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
    position: "absolute",
    left: "85%",
    textAlign:"center"
  }

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top"
      style= {navStyle}
      >
      <a className="navbar-brand" href="/"><img src="../img/quokka-logo.png" alt="logo"style={imgStyle}
      />
          <p style={wordStyle}>quokka</p>
      </a>

      <div style={styleLogin}>
      <p>Welcome, <b>{props.userName}</b></p>
      <SignupLoginModal show={show} setShow={setShow} setUserName={props.setUserName} />
      {props.userName === 'guest'
        && <button onClick={() => setShow(true)}>Login</button>
      }
      {props.userName !== 'guest'
        && <button onClick={() => axios.get('/api/auth/logout').then(props.setUserName('guest'))}>Logout</button>
      }
      </div>
    </nav>
  );
};

Nav.propTypes = {
  userName: PropTypes.string,
  setUserName: PropTypes.func,
};

export default Nav;
