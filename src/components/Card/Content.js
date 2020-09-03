import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import Card from './Card';

const StyledContent = styled.div`
  padding: ${(props) => props.theme.gutter};

  ${Card}.horizontal & {
    flex: 3;
  }
`;

StyledContent.propTypes = {
  className: PropTypes.string,
};

StyledContent.defaultProps = {};

export default StyledContent;
