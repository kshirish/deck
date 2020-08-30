import React from 'react';
import PropTypes from 'prop-types';

const Header = ({
  className,
  style = {},
  children,

  ...props
}) => {
  let styles = { ...style };

  const classNames = ['table-header', className];

  return (
    <thead className={classNames.join(' ')} style={styles} {...props}>
      {children}
    </thead>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Header;
