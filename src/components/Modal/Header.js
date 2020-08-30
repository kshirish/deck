import React from 'react';
import PropTypes from 'prop-types';

const Header = ({
  className,
  style = {},
  children,

  ...props
}) => {
  let styles = { ...style };

  const classNames = ['modal-header', className];

  return (
    <div className={classNames.join(' ')} style={styles} {...props}>
      {children}
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Header;
