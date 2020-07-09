import React from 'react';
import PropTypes from 'prop-types';

function Jumbotron({ children }) {
  return (
    <div
      style={{
        height: 125,
        clear: 'both',
        paddingTop: 30,
        textAlign: 'center',
        boxShadow: '0px 5px 5px 3px #F3969A',
        border: '3px solid #78C2AD',
      }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

Jumbotron.propTypes = {
  children: PropTypes.any,
};

export default Jumbotron;
