import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './Loader.css';

const Loader = ({
  className,
  style = {},
  size = 'medium',

  ...props
}) => {
  const styles = { ...style };

  const classNames = ['loader', `loader-${size}`, className];

  return <div className={classNames.join(' ')} style={styles} {...props} />;
};

Loader.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default Loader;
