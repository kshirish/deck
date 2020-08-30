import React from 'react';
import PropTypes from 'prop-types';

const Menu = ({
  className,
  style = {},
  children,

  ...props
}) => {
  const styles = { ...style };

  const classNames = ['menu', className];

  return (
    <div className={classNames.join(' ')} style={styles} {...props}>
      {children}
    </div>
  );
};

Menu.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Menu;
