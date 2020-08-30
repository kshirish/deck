import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './Card.css';

const Card = ({
  className,
  style = {},
  horizontal,
  children,

  ...props
}) => {
  let styles = { ...style };

  const classNames = ['card', horizontal ? 'horizontal' : '', className];

  return (
    <div className={classNames.join(' ')} style={styles} {...props}>
      {children}
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  horizontal: PropTypes.bool,
};

export default Card;
