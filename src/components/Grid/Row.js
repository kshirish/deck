import PropTypes from 'prop-types';
import styled from 'styled-components';

const getCss = (props) => {
  switch (true) {
    case props.mdTop:
      return 'align-items: flex-start';
    case props.mdMiddle:
      return 'align-items: center';
    case props.mdBottom:
      return 'align-items: flex-end';

    case props.mdStart:
      return 'justify-content: flex-start';
    case props.mdCenter:
      return 'justify-content: center';
    case props.mdEnd:
      return 'justify-content: flex-end';
    case props.mdAround:
      return 'justify-content: space-around';
    case props.mdBetween:
      return 'justify-content: space-between';
  }
};

const StyledRow = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 1 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  ${(props) => getCss(props)}
`;

StyledRow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

StyledRow.defaultProps = {};

export default StyledRow;
