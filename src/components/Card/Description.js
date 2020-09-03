import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDescription = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  line-height: 1.4;
`;

StyledDescription.propTypes = {
  className: PropTypes.string,
};

StyledDescription.defaultProps = {};

export default StyledDescription;
