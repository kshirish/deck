import React from 'react';
import PropTypes from 'prop-types';

const MenuHeader = ({
  className,
  style = {},
  children,

  ...props
}) => {
  let styles = { ...style };

  const classNames = ['menu-header', className];

  return (
    <div className={classNames.join(' ')} style={styles} {...props}>
      {children}
    </div>
  );
};

MenuHeader.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

export default MenuHeader;
