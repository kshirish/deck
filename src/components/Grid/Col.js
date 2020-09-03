import PropTypes from 'prop-types';
import styled from 'styled-components';

const getCss = (props) => {
  if (props.md) {
    const maxWidthMd = (props.md / 12) * 100;

    return `
        flex-basis: ${maxWidthMd}%;
        max-width: ${maxWidthMd}%;
        margin-left: ${props.mdOffset && `${100 - maxWidthMd}%`};
      `;
  }
};

const StyledCol = styled.div`
  flex: 1 1 auto;
  padding-right: ${(props) => props.theme.gutter};
  padding-left: ${(props) => props.theme.gutter};
  ${(props) => getCss(props)}
`;

StyledCol.propTypes = {
  className: PropTypes.string,
  md: PropTypes.number,
  mdOffset: PropTypes.number,
};

StyledCol.defaultProps = {};

export default StyledCol;
