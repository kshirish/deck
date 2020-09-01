import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import Card from './Card';

const StyledContent = styled.div`
  padding: 15px;

  ${Card}.horizontal & {
    flex: 3;
  }
`;

StyledContent.propTypes = {
  className: PropTypes.string,
};

StyledContent.defaultProps = {};

export default StyledContent;
