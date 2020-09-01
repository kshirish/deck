import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Badge = ({
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
  switch (true) {
    case !!props.color:
      return `
        background-color: ${props.color};
        color: #ffffff;    
      `;
    default:
      return `
        background-color: #e8e8e8;
        color: #666666;    
      `;
  }
};

const StyledBadge = styled(Badge)`
  display: inline-block;
  padding: 4px 8px;
  font-size: 12px;
  font-weight: 600;
  font-family: 'Manrope';
  border-radius: 5px;
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
  iconPosition: PropTypes.oneOf(['left', 'right']),
};

StyledBadge.defaultProps = {};

export default StyledBadge;
