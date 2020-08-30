import React from 'react';
import PropTypes from 'prop-types';

const Row = ({
  className,
  style = {},
  children,

  ...props
}) => {
  const styles = { ...style };

  const classNames = ['table-row', className];

  return (
    <tr className={classNames.join(' ')} style={styles} {...props}>
      {children}
    </tr>
  );
};

Row.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Row;
