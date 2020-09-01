import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledField = styled.div`
  margin-bottom: 15px;
  font-family: 'Manrope';
  font-size: 14px;

  label {
    display: block;
    margin-bottom: 10px;
    font-weight: 500;
    font-size: 14px;
  }

  input[type='text'],
  input[type='email'],
  input[type='password'],
  input[type='number'],
  textarea,
  select {
    outline: 0;
    padding: 10px;
    background: #ffffff;
    border: 1px solid #e4e4e4;
    border-radius: 5px;
    width: 100%;
    font-size: 14px;
    line-height: 20px;
    box-sizing: border-box;
  }

  select,
  textarea {
    font-family: 'Manrope';
  }
`;

StyledField.propTypes = {
  className: PropTypes.string,
};

StyledField.defaultProps = {};

export default StyledField;
