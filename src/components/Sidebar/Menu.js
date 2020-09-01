import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledMenu = styled.div`
  margin-bottom: 30px;
`;

StyledMenu.propTypes = {
  className: PropTypes.string,
};

StyledMenu.defaultProps = {};

export default StyledMenu;
