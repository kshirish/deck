import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './Alert.css';

const Alert = ({
  className,
  style = {},
  type = 'success',
  children,

  ...props
}) => {
  const styles = { ...style };

  const classNames = ['alert', `alert-${type}`, className];

  return (
    <div className={classNames.join(' ')} style={styles} {...props}>
      {children}
    </div>
  );
};

Alert.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.oneOf(['success', 'info', 'warning', 'error']),
};

export default Alert;
