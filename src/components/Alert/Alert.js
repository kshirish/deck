import PropTypes from 'prop-types';
import styled from 'styled-components';

const SUCCESS = 'success';
const INFO = 'info';
const WARNING = 'warning';
const ERROR = 'error';

const StyledAlert = styled.div`
  padding: 20px;
  margin-bottom: ${(props) => props.theme.gutter};
  color: ${(props) => props.theme[`${props.type}Shades`][0]};
  border-left: 2px solid ${(props) => props.theme[`${props.type}Shades`][1]};
  background-color: ${(props) => props.theme[`${props.type}Shades`][2]};
`;

StyledAlert.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf([SUCCESS, INFO, WARNING, ERROR]),
};

StyledAlert.defaultProps = {
  type: SUCCESS,
};

export default StyledAlert;
