import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import Table from './Table';

const HeaderCell = ({
  className,
  sorted,
  children,

  ...props
}) => (
  <th
    className={cx(
      { ascending: sorted, descending: sorted === false },
      className,
    )}
    {...props}
  >
    {children}
  </th>
);

const StyledHeaderCell = styled(HeaderCell)`
  padding: ${(props) => props.theme.gutter};
  font-weight: ${(props) => props.theme.fontWeightBold};
  text-align: ${(props) => props.textAlign};
  width: ${(props) => (props.width ? `${props.width}%` : '')};

  ${Table}.bordered & {
    border: 1px solid ${(props) => props.theme.lighterGrey};
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
      border-top: 5px solid ${(props) => props.theme.darkestGrey};
    }

    &.descending:after {
      display: inline-block;
      border-bottom: 5px solid ${(props) => props.theme.darkestGrey};
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
