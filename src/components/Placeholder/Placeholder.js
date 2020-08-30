import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './Placeholder.css';

const Placeholder = ({
  className,
  style = {},
  circle,

  ...props
}) => {
  let styles = { ...style };

  if (circle) {
    styles.borderRadius = '100%';
  }

  const classNames = ['placeholder', className];

  return <div className={classNames.join(' ')} style={styles} {...props}></div>;
};

Placeholder.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  circle: PropTypes.bool,
};

export default Placeholder;
