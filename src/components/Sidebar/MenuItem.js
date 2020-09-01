import PropTypes from 'prop-types';
import styled from 'styled-components';

const getCss = (props) => {
  switch (true) {
    case props.active:
      return `
        font-weight: 600;
        background-color: #f2f2f2;
      `;
  }
};

const StyledMenuItem = styled.div`
  padding-left: 15px;
  font-size: 14px;
  cursor: pointer;
  ${(props) => getCss(props)}

  &:active,
  &:hover,
  &:focus {
    font-weight: 600;
    background-color: #f2f2f2;
  }
`;

StyledMenuItem.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool,
};

StyledMenuItem.defaultProps = {};

export default StyledMenuItem;
