import PropTypes from 'prop-types';
import styled from 'styled-components';

const getCss = (props) => {
  switch (props.type) {
    case 'success':
      return `
        color: #23621e;
        background-color: #e8f5e9;
        border-left: 2px solid #a5d6a7;
      `;

    case 'info':
      return `
        color: #0f62a4;
        background-color: #e3f2fd;
        border-left: 2px solid #90caf9;
      `;

    case 'warning':
      return `
        color: #70600c;
        background-color: #fffddb;
        border-left: 2px solid #fff176;
      `;

    case 'error':
      return `
        color: #9f231a;
        background-color: #ffebee;
        border-left: 2px solid #ef9a9a;
      `;
  }
};

const StyledAlert = styled.div`
  padding: 20px;
  margin-bottom: 15px;
  font-family: 'Manrope';
  font-size: 14px;
  ${(props) => getCss(props)}
`;

StyledAlert.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['success', 'info', 'warning', 'error']),
};

StyledAlert.defaultProps = {
  type: 'success',
};

export default StyledAlert;
