import PropTypes from 'prop-types';
import styled from 'styled-components';

const getCss = (props) => {
  switch (true) {
    case props.tiny:
      break;

    case props.small:
      break;
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
