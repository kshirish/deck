import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledPlaceholder = styled.div`
  display: inline-block;
  animation: fading 3s linear infinite;
  background-color: ${(props) => props.theme.darkGrey};
  border-radius: ${(props) => props.circle && '100%'};

  @keyframes fading {
    0% {
      opacity: 0.1;
    }

    50% {
      opacity: 0.5;
    }

    100% {
      opacity: 0.1;
    }
  }
`;

StyledPlaceholder.propTypes = {
  className: PropTypes.string,
  circle: PropTypes.bool,
};

StyledPlaceholder.defaultProps = {};

export default StyledPlaceholder;
