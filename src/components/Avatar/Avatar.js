import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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

const getCss = (props) => {
  switch (true) {
    case !!props.color:
      return `
        background-color: ${props.color};
        color: #ffffff;    
      `;
  }
};

const getBorderRadius = (props) => {
  switch (props.type) {
    case 'circle':
      return `
        border-radius: 100%;      
      `;
    case 'rounded':
      return `
        border-radius: 5px;
      `;
  }
};

const getSizeCss = (props) => {
  switch (props.size) {
    case 'small':
      return `
        width: 50px;
        height: 50px;
        line-height: 50px;
        font-size: 16px; 
      `;
    case 'medium':
      return `
        width: 100px;
        height: 100px;
        line-height: 100px;
        font-size: 32px;
      `;
    case 'large':
      return `
        width: 150px;
        height: 150px;
        line-height: 150px;
        font-size: 48px;
      `;
  }
};

const StyledAvatar = styled(Avatar)`
  display: inline-block;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Manrope';
  margin-right: 5px;
  ${(props) => getCss(props)}
  ${(props) => getBorderRadius(props)};
  ${(props) => getSizeCss(props)}
`;

StyledAvatar.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  initials: PropTypes.string,
  type: PropTypes.oneOf(['circle', 'square', 'rounded']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

StyledAvatar.defaultProps = {
  type: 'circle',
  size: 'medium',
};

export default StyledAvatar;
