import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledContent = styled.div`
  padding: ${(props) => props.theme.gutter};
`;

StyledContent.propTypes = {
  className: PropTypes.string,
};

StyledContent.defaultProps = {};

export default StyledContent;
