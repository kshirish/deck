import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledFooter = styled.div`
  padding: ${(props) => props.theme.gutter};
  text-align: right;
`;

StyledFooter.propTypes = {
  className: PropTypes.string,
};

StyledFooter.defaultProps = {};

export default StyledFooter;
