import PropTypes from 'prop-types';
import styled from 'styled-components';

const getCss = (props) => {
  switch (true) {
    case props.tiny:
      return `
        font-size: ${props.theme.fontSizeBodyTiny};
        line-height: ${props.theme.lineHeightBodyTiny};    
      `;

    case props.small:
      return `
        font-size: ${props.theme.fontSizeBodySmall};
        line-height: ${props.theme.lineHeightBodySmall};    
      `;

    default:
      return `
        font-size: ${props.theme.fontSizeBody};
        line-height: ${props.theme.lineHeightBody};    
      `;
  }
};

const StyledTextBody = styled.p`
  ${(props) => getCss(props)}
`;

StyledTextBody.propTypes = {
  className: PropTypes.string,
  tiny: PropTypes.bool,
  small: PropTypes.bool,
};

StyledTextBody.defaultProps = {};

export default StyledTextBody;
