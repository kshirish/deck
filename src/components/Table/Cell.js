import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import Table from './Table';

const StyledCell = styled.td`
  padding: 15px;
  text-align: ${(props) => props.textAlign};

  ${Table}.bordered & {
    border: 1px solid #e4e4e4;
  }

  ${Table}.compact & {
    padding: 10px;
  }

  ${Table}.centered & {
    text-align: center;
  }
`;

StyledCell.propTypes = {
  className: PropTypes.string,
  textAlign: PropTypes.string,
};

StyledCell.defaultProps = {
  textAlign: 'left',
};

export default StyledCell;
