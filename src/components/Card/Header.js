import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHeader = styled.div`
  font-size: ${(props) => props.theme.fontSizeHeading4};
  margin: 0;
`;

StyledHeader.propTypes = {
  className: PropTypes.string,
};

StyledHeader.defaultProps = {};

export default StyledHeader;
