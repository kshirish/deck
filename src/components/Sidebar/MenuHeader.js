import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledMenuHeader = styled.div`
  font-weight: 600;
  text-transform: uppercase;
  color: #9e9e9e;
  font-size: 12px;
`;

StyledMenuHeader.propTypes = {
  className: PropTypes.string,
};

StyledMenuHeader.defaultProps = {};

export default StyledMenuHeader;
