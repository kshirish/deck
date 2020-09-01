import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import Card from './Card';

const StyledStacked = styled.div`
  ${Card}.horizontal & {
    flex: 2;
    display: flex;
    flex-direction: column;
  }
`;

StyledStacked.propTypes = {
  className: PropTypes.string,
};

StyledStacked.defaultProps = {};

export default StyledStacked;
