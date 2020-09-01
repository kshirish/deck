import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import Table from './Table';
import Body from './Body';

const StyledRow = styled.tr`
  ${Table}.highlighted &:hover {
    background-color: #f5f5f5;
    cursor: pointer;
  }

  ${Table}.striped ${Body} &:nth-child(2n + 1) {
    background-color: #f5f5f5;
  }
`;

StyledRow.propTypes = {
  className: PropTypes.string,
};

StyledRow.defaultProps = {};

export default StyledRow;
