import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Card = ({
  className,
  horizontal,
  children,

  ...props
}) => {
  const classNames = [horizontal ? 'horizontal' : '', className];

  return (
    <div className={classNames.join(' ')} {...props}>
      {children}
    </div>
  );
};

const StyledCard = styled(Card)`
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  font-family: 'Manrope';

  &.horizontal {
    display: flex;
  }
`;

StyledCard.propTypes = {
  className: PropTypes.string,
  horizontal: PropTypes.bool,
};

StyledCard.defaultProps = {};

export default StyledCard;
