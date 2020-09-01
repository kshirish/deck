import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const List = ({
  className,
  divided,
  children,

  ...props
}) => {
  const classNames = [divided ? 'divided' : '', className];

  return (
    <div className={classNames.join(' ')} {...props}>
      {children}
    </div>
  );
};

const StyledList = styled(List)`
  font-family: 'Manrope';
  font-size: 14px;
`;

StyledList.propTypes = {
  className: PropTypes.string,
  divided: PropTypes.bool,
};

StyledList.defaultProps = {};

export default StyledList;
