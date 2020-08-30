import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './Badge.css';

const Badge = ({
  className,
  style = {},
  icon,
  iconPosition,
  color,
  children,

  ...props
}) => {
  const styles = { ...style };

  if (color) {
    styles.backgroundColor = color;
    styles.color = '#ffffff';
  }

  const classNames = [
    'badge',
    icon ? `badge-icon-${iconPosition}` : '',
    className,
  ];

  const renderContent = () => {
    if (!icon) return children;

    switch (iconPosition) {
      case 'right':
        return (
          <>
            {children}
            {icon}
          </>
        );

      case 'left':
        return (
          <>
            {icon}
            {children}
          </>
        );

      default:
    }
  };

  return (
    <div className={classNames.join(' ')} style={styles} {...props}>
      {renderContent()}
    </div>
  );
};

Badge.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  color: PropTypes.string,
  icon: PropTypes.element,
  iconPosition: PropTypes.oneOf(['left', 'right']),
};

export default Badge;
