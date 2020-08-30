import React from 'react';
import PropTypes from 'prop-types';

const Stacked = ({
  className,
  style = {},
  children,

  ...props
}) => {
  const styles = { ...style };

  const classNames = ['card-stacked', className];

  return (
    <div className={classNames.join(' ')} style={styles} {...props}>
      {children}
    </div>
  );
};

Stacked.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Stacked;
