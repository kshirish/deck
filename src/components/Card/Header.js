import React from 'react';
import PropTypes from 'prop-types';

const Header = ({
  className,
  style = {},
  children,

  ...props
}) => {
  const styles = { ...style };

  const classNames = ['card-header', className];

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
