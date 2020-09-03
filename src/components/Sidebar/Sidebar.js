import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledSidebar = styled.div`
  padding: ${(props) => props.theme.gutter} 0;
  line-height: 2;
`;

StyledSidebar.propTypes = {
  className: PropTypes.string,
};

StyledSidebar.defaultProps = {};

export default StyledSidebar;
