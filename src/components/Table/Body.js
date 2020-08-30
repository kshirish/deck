import React from 'react';
import PropTypes from 'prop-types';

const Body = ({
  className,
  style = {},
  children,

  ...props
}) => {
  let styles = { ...style };

  const classNames = ['table-body', className];

  return (
    <tbody className={classNames.join(' ')} style={styles} {...props}>
      {children}
    </tbody>
  );
};

Body.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Body;
