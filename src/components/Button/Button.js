import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './Button.css';

const Button = ({
  className,
  style = {},
  type = 'primary',
  size = 'medium',
  icon,
  iconPosition,
  children,
  color,
  outline,
  block,
  disabled,

  ...props
}) => {
  let styles = { ...style };

  if (color) {
    styles.backgroundColor = color;
    styles.color = '#ffffff';
  }

  if (outline) {
    styles.backgroundColor = 'transparent';
    styles.color = outline;
    styles.border = `1px solid ${outline}`;
  }

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

  const classNames = [
    'button',
    `button-${size}`,
    `button-${type}`,
    icon ? `button-icon-${iconPosition}` : '',
    disabled ? 'button-disabled' : '',
    block ? 'button-block' : '',
    className,
  ];

  return (
    <button
      type="button"
      className={classNames.join(' ')}
      style={styles}
      {...props}
    >
      {renderContent()}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  color: PropTypes.string,
  outline: PropTypes.string,
  icon: PropTypes.element,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  type: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
  onClick: PropTypes.func,
};

export default Button;
