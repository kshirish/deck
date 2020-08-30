import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './Table.css';

const Table = ({
  className,
  style = {},
  bordered,
  highlighted,
  striped,
  compact,
  sortable,
  children,

  ...props
}) => {
  let styles = { ...style };

  const classNames = [
    'table',
    bordered ? 'bordered' : '',
    highlighted ? 'highlighted' : '',
    striped ? 'striped' : '',
    compact ? 'compact' : '',
    sortable ? 'sortable' : '',
    className,
  ];

  return (
    <table className={classNames.join(' ')} style={styles} {...props}>
      {children}
    </table>
  );
};

Table.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  bordered: PropTypes.bool,
  highlighted: PropTypes.bool,
  striped: PropTypes.bool,
  compact: PropTypes.bool,
  sortable: PropTypes.bool,
};

export default Table;
