import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CIRCLE = 'circle';
const ROUNDED = 'rounded';

const SMALL = 'small';
const MEDIUM = 'medium';
const LARGE = 'large';

const Avatar = ({
  src,
  alt,
  initials,

  ...props
}) => {
  if (src) {
    return <img src={src} alt={alt} {...props} />;
  }

  return <div {...props}>{initials}</div>;
};

const getBorderRadius = (props) => {
  switch (props.type) {
    case CIRCLE:
      return `
        border-radius: 100%;      
      `;
    case ROUNDED:
      return `
        border-radius: ${(props) => props.theme.borderRadius};
      `;
  }
};

const getSizeCss = (props) => {
  switch (props.size) {
    case SMALL:
      return `
        width: 50px;
        height: 50px;
        line-height: 50px;
        font-size: 16px; 
      `;
    case MEDIUM:
      return `
        width: 100px;
        height: 100px;
        line-height: 100px;
        font-size: 32px;
      `;
    case LARGE:
      return `
        width: 150px;
        height: 150px;
        line-height: 150px;
        font-size: 48px;
      `;
  }
};

const getCss = (props) => {
  if (props.color) {
    return `
      background-color: ${props.color};
      color: ${props.theme.white};
    `;
  }
};

const StyledAvatar = styled(Avatar)`
  display: inline-block;
  text-align: center;
  text-transform: uppercase;
  margin-right: 5px;
  ${(props) => getBorderRadius(props)};
  ${(props) => getSizeCss(props)}
  ${(props) => getCss(props)}
`;

StyledAvatar.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  initials: PropTypes.string,
  type: PropTypes.oneOf([CIRCLE, ROUNDED]),
  size: PropTypes.oneOf([SMALL, MEDIUM, LARGE]),
};

StyledAvatar.defaultProps = {
  type: CIRCLE,
  size: MEDIUM,
};

export default StyledAvatar;
