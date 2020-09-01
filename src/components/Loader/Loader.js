import PropTypes from 'prop-types';
import styled from 'styled-components';

const getCss = (props) => {
  switch (props.size) {
    case 'small':
      return `
      width: 30px;
      height: 30px;
    `;
    case 'medium':
      return `
        width: 60px;
        height: 60px;
      `;
    case 'large':
      return `
      width: 90px;
      height: 90px;
    `;
  }
};

const StyledLoader = styled.div`
  display: inline-block;
  border: 5px solid #e4e4e4;
  border-top: 5px solid #f65858;
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
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

StyledLoader.defaultProps = { size: 'medium' };

export default StyledLoader;
