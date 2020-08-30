import React from 'react';
import PropTypes from 'prop-types';

const HeaderCell = ({
  className,
  style = {},
  textAlign = 'left',
  width,
  sorted,
  children,

  ...props
}) => {
  const styles = { ...style };

  styles.textAlign = textAlign;

  if (width) {
    styles.width = `${width}%`;
  }

  const classNames = [
    'table-header-cell',
    sorted === null ? '' : sorted ? 'ascending' : 'descending',
    className,
  ];

  return (
    <th className={classNames.join(' ')} style={styles} {...props}>
      {children}
    </th>
  );
};

HeaderCell.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  textAlign: PropTypes.string,
  width: PropTypes.number,
  sorted: PropTypes.bool,
};

export default HeaderCell;
