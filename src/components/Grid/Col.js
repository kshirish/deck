import PropTypes from 'prop-types';
import styled from 'styled-components';

const getCss = (props) => {
  switch (true) {
    case !!props.md:
      const maxWidthMd = (props.md / 12) * 100;

      return `
        flex-basis: ${maxWidthMd}%;
        max-width: ${maxWidthMd}%;
        margin-left: ${props.mdOffset ? 100 - maxWidthMd : ''}%;
      `;
  }
};

const StyledCol = styled.div`
  box-sizing: border-box;
  flex: 1 1 auto;
  padding-right: 15px;
  padding-left: 15px;
  ${(props) => getCss(props)}
`;

StyledCol.propTypes = {
  className: PropTypes.string,
  md: PropTypes.number,
  mdOffset: PropTypes.number,
};

StyledCol.defaultProps = {};

export default StyledCol;
