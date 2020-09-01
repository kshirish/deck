import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = ({
  className,
  children,
  active,
  link,

  ...props
}) => {
  const classNames = [active ? 'active' : '', link ? 'link' : '', className];

  return (
    <div className={classNames.join(' ')} {...props}>
      {children}
    </div>
  );
};

const StyledSection = styled(Section)`
  display: inline-block;

  &.link {
    color: #297cbb;
  }

  &.active {
    color: #616161;
  }
`;

StyledSection.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool,
  link: PropTypes.bool,
};

StyledSection.defaultProps = {};

export default StyledSection;
