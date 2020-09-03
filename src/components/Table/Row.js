import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import Table from './Table';
import Body from './Body';

const StyledRow = styled.tr`
  ${Table}.highlighted &:hover {
    background-color: ${(props) => props.theme.lightestGrey};
    cursor: pointer;
  }

  ${Table}.striped ${Body} &:nth-child(2n + 1) {
    background-color: ${(props) => props.theme.lightestGrey};
  }
`;

StyledRow.propTypes = {
  className: PropTypes.string,
};

StyledRow.defaultProps = {};

export default StyledRow;
