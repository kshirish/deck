import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import Card from './Card';

const StyledFooter = styled.div`
  text-align: right;
  padding: ${(props) => props.theme.gutter};
  background-color: ${(props) => props.theme.lightestGrey};

  ${Card}.horizontal & {
    flex: 1;
  }
`;

StyledFooter.propTypes = {
  className: PropTypes.string,
};

StyledFooter.defaultProps = {};

export default StyledFooter;
