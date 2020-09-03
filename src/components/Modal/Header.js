import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHeader = styled.div`
  margin: 0;
  padding: 20px ${(props) => props.theme.gutter};
  font-size: ${(props) => props.theme.fontSizeHeading4};
  font-weight: ${(props) => props.theme.fontWeightMedium};
  border-top-left-radius: ${(props) => props.theme.borderRadius};
  border-top-right-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.lightestGrey};
`;

StyledHeader.propTypes = {
  className: PropTypes.string,
};

StyledHeader.defaultProps = {};

export default StyledHeader;
