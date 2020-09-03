import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledBreadcrumb = styled.div`
  list-style: none;
  margin: ${(props) => props.theme.gutter} 0;
  padding: ${(props) => props.theme.gutter};
  border-radius: ${(props) => props.theme.borderRadius};
`;

StyledBreadcrumb.propTypes = {
  className: PropTypes.string,
};

StyledBreadcrumb.defaultProps = {};

export default StyledBreadcrumb;
