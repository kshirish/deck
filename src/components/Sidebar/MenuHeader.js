import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledMenuHeader = styled.div`
  padding-left: ${(props) => props.theme.gutter};
  font-weight: ${(props) => props.theme.fontWeightBold};
  text-transform: uppercase;
  color: ${(props) => props.theme.darkGrey};
  font-size: ${(props) => props.theme.fontSizeBodySmall};
`;

StyledMenuHeader.propTypes = {
  className: PropTypes.string,
};

StyledMenuHeader.defaultProps = {};

export default StyledMenuHeader;
