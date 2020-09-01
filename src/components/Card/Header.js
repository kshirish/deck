import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHeader = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
`;

StyledHeader.propTypes = {
  className: PropTypes.string,
};

StyledHeader.defaultProps = {};

export default StyledHeader;
