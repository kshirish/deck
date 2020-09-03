import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LEFT = 'left';
const RIGHT = 'right';

const Badge = ({
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
    <div
      className={cx(
        {
          [`badge-icon-${iconPosition}`]: icon,
        },
        className,
      )}
      {...props}
    >
      {renderContent()}
    </div>
  );
};

const getCss = (props) => {
  if (props.color) {
    return `
      background-color: ${props.color};
      color: #ffffff;    
    `;
  }

  return `
    background-color: #e8e8e8;
    color: #666666;    
  `;
};

const StyledBadge = styled(Badge)`
  display: inline-block;
  padding: 4px 8px;
  font-size: ${(props) => props.theme.fontSizeBodySmall};
  font-weight: ${(props) => props.theme.fontWeightBold};
  border-radius: ${(props) => props.theme.borderRadius};
  margin: 0 2px;
  text-transform: capitalize;
  ${(props) => getCss(props)}

  &.badge-icon-left img {
    width: 15px;
    vertical-align: sub;
    margin-right: 5px;
  }

  &.badge-icon-right img {
    width: 15px;
    vertical-align: sub;
    margin-left: 5px;
  }
`;

StyledBadge.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.element,
  iconPosition: PropTypes.oneOf([LEFT, RIGHT]),
};

StyledBadge.defaultProps = {
  iconPosition: LEFT,
};

export default StyledBadge;
