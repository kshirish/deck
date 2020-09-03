import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const getCss = (props) => {
  if (props.level >= 1 && props.level <= 6) {
    return `
      font-size: ${props.theme[`fontSizeHeading${props.level}`]};
      line-height: ${props.theme[`lineHeightHeading${props.level}`]};    
      font-weight: ${props.weight || props.theme.fontWeightRegular};
    `;
  }
};

const TextHeading = ({ level, children, ...props }) => {
  const Element = `h${level}`;

  return <Element {...props}>{children}</Element>;
};

const StyledTextHeading = styled(TextHeading)`
  ${(props) => getCss(props)}
`;

StyledTextHeading.propTypes = {
  className: PropTypes.string,
  level: PropTypes.number,
  weight: PropTypes.number,
};

StyledTextHeading.defaultProps = {
  level: 1,
};

export default StyledTextHeading;
