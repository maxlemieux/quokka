import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";

const Nav = (props) => {
  const history = useHistory();
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
    display: 'flex'
  };
  const styleLogin = {
    // position: 'absolute',
    // left: '80%',
  };
  const userStyle = {
    position: 'relative',
    padding: '12px 0px 0px 75px',
    color: 'cornsilk',
    fontSize: '20px',
    
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between sticky-top"
      style= {navStyle}
      >
      <a className="navbar-brand" href="/"><img src="../img/quokka-logo.png" alt="logo"style={imgStyle}/>
          <p style={wordStyle}>quokka</p>
      </a>

      <div> 
        <p style={userStyle}>Welcome, <b>{props.userName}</b>&nbsp;</p>
      </div>

      <div style={styleLogin}>
        {/* <p>Welcome, <b>{props.userName}</b>&nbsp; */}
          {props.userName === 'guest'
            && <button onClick={() => history.push("/login")}>Login</button>
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
            && <> | <button onClick={() => history.push("/signup")}>Sign Up</button></>
          }
        {/* </p> */}
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
