import PropTypes from 'prop-types';
import styled from 'styled-components';

const getCss = (props) => {
  if (props.active) {
    return `
      font-weight: ${props.theme.fontWeightBold};
      background-color: ${props.theme.lightestGrey};;
    `;
  }
};

const StyledMenuItem = styled.div`
  padding-left: ${(props) => props.theme.gutter2x};

  cursor: pointer;
  ${(props) => getCss(props)}

  &:active,
  &:hover,
  &:focus {
    font-weight: ${(props) => props.theme.fontWeightBold};
    background-color: ${(props) => props.theme.lightestGrey};
  }
`;

StyledMenuItem.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool,
};

StyledMenuItem.defaultProps = {};

export default StyledMenuItem;
