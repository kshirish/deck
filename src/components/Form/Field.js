import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledField = styled.div`
  margin-bottom: ${(props) => props.theme.gutter};

  label {
    display: block;
    margin-bottom: 10px;
    font-weight: ${(props) => props.theme.fontWeightMedium};
  }

  input[type='checkbox'],
  input[type='radio'] {
    margin: 5px;
  }

  input[type='text'],
  input[type='email'],
  input[type='password'],
  input[type='number'],
  textarea,
  select {
    outline: 0;
    padding: 10px;
    background-color: ${(props) => props.theme.white};
    border: 1px solid ${(props) => props.theme.lighterGrey};
    border-radius: ${(props) => props.theme.borderRadius};
    width: 100%;
    line-height: 20px;
    font-family: inherit;
  }
`;

StyledField.propTypes = {
  className: PropTypes.string,
};

StyledField.defaultProps = {};

export default StyledField;
