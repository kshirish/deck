import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({
  className,
  style = {},
  children,

  ...props
}) => {
  const styles = { ...style };

  const classNames = ['table-footer', className];

  return (
    <tfoot className={classNames.join(' ')} style={styles} {...props}>
      {children}
    </tfoot>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Footer;
