import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledBreadcrumb = styled.div`
  list-style: none;
  margin: 15px 0;
  padding: 15px;
  border-radius: 5px;
  font-family: 'Manrope';
  font-size: 14px;
`;

StyledBreadcrumb.propTypes = {
  className: PropTypes.string,
};

StyledBreadcrumb.defaultProps = {};

export default StyledBreadcrumb;
