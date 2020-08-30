import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './Avatar.css';

const Avatar = ({
  className,
  style = {},
  type = 'circle',
  size = 'medium',
  color,
  src,
  alt,
  initials,

  ...props
}) => {
  const styles = { ...style };

  if (color) {
    styles.backgroundColor = color;
    styles.color = '#ffffff';
  }

  const classNames = ['avatar', `avatar-${size}`, `avatar-${type}`, className];

  if (!src) {
    return (
      <div className={classNames.join(' ')} style={styles} {...props}>
        {initials}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={classNames.join(' ')}
      style={styles}
      {...props}
    />
  );
};

Avatar.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  color: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  initials: PropTypes.string,
  type: PropTypes.oneOf(['circle', 'square', 'rounded']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default Avatar;
