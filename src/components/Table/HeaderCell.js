import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import Table from './Table';

const HeaderCell = ({
  className,
  sorted,
  children,

  ...props
}) => {
  const classNames = [
    sorted === null ? '' : sorted ? 'ascending' : 'descending',
    className,
  ];

  return (
    <th className={classNames.join(' ')} {...props}>
      {children}
    </th>
  );
};

const StyledHeaderCell = styled(HeaderCell)`
  padding: 15px;
  font-weight: 600;
  text-align: ${(props) => props.textAlign};
  width: ${(props) => (props.width ? `${props.width}%` : '')};

  ${Table}.bordered & {
    border: 1px solid #e4e4e4;
  }

  ${Table}.compact & {
    padding: 10px;
  }

  ${Table}.centered & {
    text-align: center;
  }

  ${Table}.sortable & {
    cursor: pointer;

    &:after {
      content: '';
      display: none;
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      margin-left: 5px;
      vertical-align: middle;
    }

    &.ascending:after {
      display: inline-block;
      border-top: 5px solid #333333;
    }

    &.descending:after {
      display: inline-block;
      border-bottom: 5px solid #333333;
    }
  }
`;

StyledHeaderCell.propTypes = {
  className: PropTypes.string,
  textAlign: PropTypes.string,
  width: PropTypes.number,
  sorted: PropTypes.bool,
};

StyledHeaderCell.defaultProps = {
  textAlign: 'left',
};

export default StyledHeaderCell;
