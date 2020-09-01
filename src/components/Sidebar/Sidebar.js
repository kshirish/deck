import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSidebar = styled.div`
  padding: 15px;
  line-height: 2;
  font-family: Manrope;

  ul {
    padding-left: 15px;
  }
`;

StyledSidebar.propTypes = {
  className: PropTypes.string,
};

StyledSidebar.defaultProps = {};

export default StyledSidebar;
