import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledMenu = styled.div`
  margin-bottom: ${(props) => props.theme.gutter2x};
`;

StyledMenu.propTypes = {
  className: PropTypes.string,
};

StyledMenu.defaultProps = {};

export default StyledMenu;
