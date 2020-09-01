import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = ({
  className,
  icon,
  iconPosition,
  children,

  ...props
}) => {
  const renderContent = () => {
    if (!icon) return children;

    switch (iconPosition) {
      case 'right':
        return (
          <>
            {children}
            {icon}
          </>
        );

      case 'left':
        return (
          <>
            {icon}
            {children}
          </>
        );
    }
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
  switch (true) {
    case props.disabled:
      return `
        pointer-events: none;
        opacity: 0.5;
        cursor: not-allowed;
      `;

    case props.block:
      return `
        width: 100%;
      `;
  }
};

const getTypeCss = (props) => {
  switch (props.type) {
    case 'primary':
      return `
        border: none;
        background-color: ${props.color || '#f65858'};
        color: #ffffff;  
      `;

    case 'secondary':
      return `
        border: none;
        background-color: transparent;
        color: #0098ab;  
      `;

    case 'outline':
      return `
        background-color: transparent;
        color: ${props.color};
        border: 1px solid ${props.color || '#e4e4e4'};
      `;
  }
};

const getSizeCss = (props) => {
  switch (props.size) {
    case 'tiny':
      return `
        padding: 3px 6px;
        font-size: 10px;
      `;
    case 'small':
      return `
        padding: 5px 10px;
        font-size: 12px;  
      `;
    case 'medium':
      return `
        padding: 8px 16px;
        font-size: 14px;
      `;
    case 'large':
      return `
        padding: 12px 24px;
        font-size: 16px;  
      `;
    case 'huge':
      return `
        padding: 15px 30px;
        font-size: 20px;
      `;
  }
};

const StyledButton = styled(Button)`
  outline: 0;  
  z-index: 0;  
  cursor: pointer;
  margin-right: 5px;
  font-weight: 500;
  font-family: 'Manrope';
  text-transform: capitalize;
  text-decoration: none;
  color: #212121;
  position: relative;  
  border-radius: 5px;  
  ${(props) => getCss(props)}
  ${(props) => getTypeCss(props)}
  ${(props) => getSizeCss(props)}

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
  iconPosition: PropTypes.oneOf(['left', 'right']),
  type: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
  onClick: PropTypes.func,
};

StyledButton.defaultProps = {
  type: 'primary',
  size: 'medium',
};

export default StyledButton;
