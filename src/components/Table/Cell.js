import React from 'react';
import PropTypes from 'prop-types';

const Cell = ({
  className,
  style = {},
  textAlign = 'left',
  children,

  ...props
}) => {
  const styles = { ...style };

  styles.textAlign = textAlign;

  const classNames = ['table-cell', className];

  return (
    <td className={classNames.join(' ')} style={styles} {...props}>
      {children}
    </td>
  );
};

Cell.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  textAlign: PropTypes.string,
};

export default Cell;
