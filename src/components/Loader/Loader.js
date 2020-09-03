import PropTypes from 'prop-types';
import styled from 'styled-components';

const SMALL = 'small';
const MEDIUM = 'medium';
const LARGE = 'large';

const getCss = (props) => {
  switch (props.size) {
    case SMALL:
      return `
      width: 30px;
      height: 30px;
    `;
    case MEDIUM:
      return `
        width: 60px;
        height: 60px;
      `;
    case LARGE:
      return `
      width: 90px;
      height: 90px;
    `;
  }
};

const StyledLoader = styled.div`
  display: inline-block;
  border: 5px solid ${(props) => props.theme.lighterGrey};
  border-top: 5px solid ${(props) => props.theme.primary};
  border-radius: 50%;
  animation: spin 2s linear infinite;
  ${(props) => getCss(props)}

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

StyledLoader.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf([SMALL, MEDIUM, LARGE]),
};

StyledLoader.defaultProps = { size: MEDIUM };

export default StyledLoader;
