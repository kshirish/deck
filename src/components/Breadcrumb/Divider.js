import React from 'react';
import PropTypes from 'prop-types';

const Divider = ({
  className,
  style = {},

  ...props
}) => {
  const styles = { ...style };

  const classNames = ['breadcrumb-divider', className];

  return (
    <div className={classNames.join(' ')} style={styles} {...props}>
      /
    </div>
  );
};

Divider.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Divider;
