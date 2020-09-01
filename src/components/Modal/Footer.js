import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledFooter = styled.div`
  padding: 15px;
  text-align: right;
`;

StyledFooter.propTypes = {
  className: PropTypes.string,
};

StyledFooter.defaultProps = {};

export default StyledFooter;
