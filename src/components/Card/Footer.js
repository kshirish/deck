import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({
  className,
  style = {},
  children,

  ...props
}) => {
  const styles = { ...style };

  const classNames = ['card-footer', className];

  return (
    <div className={classNames.join(' ')} style={styles} {...props}>
      {children}
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Footer;
