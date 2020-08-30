import React from 'react';
import PropTypes from 'prop-types';

const MenuItem = ({
  className,
  style = {},
  active,
  children,

  ...props
}) => {
  const styles = { ...style };

  const classNames = ['menu-item', active ? 'active' : '', className];

  return (
    <div className={classNames.join(' ')} style={styles} {...props}>
      {children}
    </div>
  );
};

MenuItem.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  active: PropTypes.bool,
};

export default MenuItem;
