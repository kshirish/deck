import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledContent = styled.div`
  padding: 15px;
  font-size: 14px;
`;

StyledContent.propTypes = {
  className: PropTypes.string,
};

StyledContent.defaultProps = {};

export default StyledContent;
