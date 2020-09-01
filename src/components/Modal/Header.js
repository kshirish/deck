import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHeader = styled.div`
  margin: 0;
  font-size: 20px;
  font-weight: 500;
  padding: 20px 15px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background-color: #e4e4e4;
`;

StyledHeader.propTypes = {
  className: PropTypes.string,
};

StyledHeader.defaultProps = {};

export default StyledHeader;
