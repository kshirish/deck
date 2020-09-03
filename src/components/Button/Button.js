import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LEFT = 'left';
const RIGHT = 'right';
const PRIMARY = 'primary';
const SECONDARY = 'secondary';
const OUTLINE = 'outline';
const TINY = 'tiny';
const SMALL = 'small';
const MEDIUM = 'medium';
const LARGE = 'large';
const HUGE = 'huge';

const Button = ({
  className,
  icon,
  iconPosition,
  children,

  ...props
}) => {
  const renderContent = () => {
    if (!icon) return children;

    if (iconPosition === RIGHT) {
      return (
        <>
          {children}
          {icon}
        </>
      );
    }

    return (
      <>
        {icon}
        {children}
      </>
    );
  };

  return (
    <button
      className={cx(
        {
          [`button-icon-${iconPosition}`]: icon,
        },
        className,
      )}
      {...props}
    >
      {renderContent()}
    </button>
  );
};

const getCss = (props) => {
  if (props.disabled) {
    return `
      pointer-events: none;
      opacity: 0.5;
      cursor: not-allowed;
    `;
  }
};

const getTypeCss = (props) => {
  switch (props.type) {
    case PRIMARY:
      return `
        border: none;
        background-color: ${props.color || props.theme.primary};
        color: ${props.theme.white};  
      `;

    case SECONDARY:
      return `
        border: none;
        background-color: transparent;
        color: ${props.theme.secondary};
      `;

    case OUTLINE:
      return `
        background-color: transparent;
        color: ${props.color};
        border: 1px solid ${props.color || props.theme.lighterGrey};
      `;
  }
};

const getSizeCss = (props) => {
  switch (props.size) {
    case TINY:
      return `
        padding: 3px 6px;
        font-size: ${props.theme.fontSizeBodyTiny};
      `;
    case SMALL:
      return `
        padding: 5px 10px;
        font-size: ${props.theme.fontSizeBodySmall};
      `;
    case MEDIUM:
      return `
        padding: 8px 16px;        
      `;
    case LARGE:
      return `
        padding: 12px 24px;
        font-size: ${props.theme.fontSizeHeading5};
      `;
    case HUGE:
      return `
        padding: 15px 30px;
        font-size: ${props.theme.fontSizeHeading4};
      `;
  }
};

const StyledButton = styled(Button)`
  outline: 0;  
  z-index: 0;  
  cursor: pointer;
  margin-right: 5px;
  font-weight: ${(props) => props.theme.fontWeightMedium};
  font-family: inherit; 
  font-size: inherit;
  color: ${(props) => props.theme.textPrimary}; 
  text-transform: capitalize;
  text-decoration: none;  
  position: relative;  
  width: ${(props) => props.block && '100%'};
  border-radius: ${(props) => props.theme.borderRadius};    
  ${(props) => getTypeCss(props)}
  ${(props) => getSizeCss(props)}
  ${(props) => getCss(props)}

  &.button-icon-left img {
    width: 15px;
    vertical-align: sub;
    margin-right: 5px;
  }

  &.button-icon-right img {
    width: 15px;
    vertical-align: sub;
    margin-left: 5px;
  }
`;

StyledButton.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.element,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  iconPosition: PropTypes.oneOf([LEFT, RIGHT]),
  type: PropTypes.oneOf([PRIMARY, SECONDARY, OUTLINE]),
  size: PropTypes.oneOf([TINY, SMALL, MEDIUM, LARGE, HUGE]),
  onClick: PropTypes.func,
};

StyledButton.defaultProps = {
  type: PRIMARY,
  size: MEDIUM,
  iconPosition: LEFT,
};

export default StyledButton;
