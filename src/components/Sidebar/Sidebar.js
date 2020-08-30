import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './Sidebar.css';

const Sidebar = ({
  className,
  style = {},
  children,

  ...props
}) => {
  let styles = { ...style };

  const classNames = ['sidebar', className];

  return (
    <div className={classNames.join(' ')} style={styles} {...props}>
      {children}
    </div>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Sidebar;
