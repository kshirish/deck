import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Table = ({
  className,
  bordered,
  highlighted,
  striped,
  compact,
  sortable,
  children,

  ...props
}) => (
  <table
    className={cx(
      {
        bordered,
        highlighted,
        striped,
        compact,
        sortable,
      },
      className,
    )}
    {...props}
  >
    {children}
  </table>
);

const StyledTable = styled(Table)`
  width: 100%;
  border-collapse: collapse;

  &.bordered {
    border: 1px solid ${(props) => props.theme.lighterGrey};
  }
`;

StyledTable.propTypes = {
  className: PropTypes.string,
  bordered: PropTypes.bool,
  highlighted: PropTypes.bool,
  striped: PropTypes.bool,
  compact: PropTypes.bool,
  sortable: PropTypes.bool,
};

StyledTable.defaultProps = {};

export default StyledTable;
