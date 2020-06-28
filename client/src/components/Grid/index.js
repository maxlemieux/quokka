import React from 'react';
import PropTypes from 'prop-types';

export function Container({ fluid, children }) {
  return <div className={`container${fluid ? '-fluid' : ''}`}>{children}</div>;
}

Container.propTypes = {
  fluid: PropTypes.any,
  children: PropTypes.any,
};

export function Row({ fluid, children }) {
  return <div className={`row${fluid ? '-fluid' : ''}`}>{children}</div>;
}

Row.propTypes = {
  fluid: PropTypes.any,
  children: PropTypes.any,
};

// This Col component lets us size bootstrap columns with less syntax
// e.g. <Col size="md-12"> instead of <div className="col-md-12">
export function Col({ size, children }) {
  return (
    <div
      className={size
        .split(' ')
        .map((splitSize) => `col-${splitSize}`)
        .join(' ')}
    >
      {children}
    </div>
  );
}

Col.propTypes = {
  size: PropTypes.any,
  children: PropTypes.any,
};
