import React from 'react';
import PropTypes from 'prop-types';

const Image = ({
  className,
  style = {},
  src,
  alt,

  ...props
}) => {
  const styles = { ...style };

  const classNames = ['card-image', className];

  return (
    <div className={classNames.join(' ')} style={styles} {...props}>
      <img src={src} alt={alt} />
    </div>
  );
};

Image.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default Image;
