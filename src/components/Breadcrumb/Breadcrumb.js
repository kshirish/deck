import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './Breadcrumb.css';

const Breadcrumb = ({
  className,
  style = {},
  children,

  ...props
}) => {
  const styles = { ...style };

  const classNames = ['breadcrumb', className];

  return (
    <div className={classNames.join(' ')} style={styles} {...props}>
      {children}
    </div>
  );
};

Breadcrumb.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Breadcrumb;
