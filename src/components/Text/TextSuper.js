import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTextSuper = styled.p`
  font-size: ${(props) => props.theme.fontSizeSuper};
  line-height: ${(props) => props.theme.lineHeightSuper};
`;

StyledTextSuper.propTypes = {
  className: PropTypes.string,
};

StyledTextSuper.defaultProps = {};

export default StyledTextSuper;
