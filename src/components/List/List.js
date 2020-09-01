import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const List = ({
  className,
  divided,
  children,

  ...props
}) => (
  <div className={cx({ divided }, className)} {...props}>
    {children}
  </div>
);

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
