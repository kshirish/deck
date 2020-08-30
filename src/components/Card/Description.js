import React from 'react';
import PropTypes from 'prop-types';

const Description = ({
  className,
  style = {},
  children,

  ...props
}) => {
  let styles = { ...style };

  const classNames = ['card-description', className];

  return (
    <div className={classNames.join(' ')} style={styles} {...props}>
      {children}
    </div>
  );
};

Description.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Description;
