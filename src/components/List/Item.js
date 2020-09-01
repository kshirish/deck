import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import List from './List';

const StyledItem = styled.div`
  padding: 10px;

  ${List}.divided & {
    border-bottom: 1px solid #e4e4e4;
    &:last-child {
      border: none;
    }
  }
`;

StyledItem.propTypes = {
  className: PropTypes.string,
};

StyledItem.defaultProps = {};

export default StyledItem;
