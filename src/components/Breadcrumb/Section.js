import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = ({
  className,
  children,
  active,
  link,

  ...props
}) => (
  <div className={cx({ active, link }, className)} {...props}>
    {children}
  </div>
);

const StyledSection = styled(Section)`
  display: inline-block;

  &.link {
    color: ${(props) => props.theme.linkPrimary};
  }

  &.active {
    color: ${(props) => props.theme.darkerGrey};
  }
`;

StyledSection.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool,
  link: PropTypes.bool,
};

StyledSection.defaultProps = {};

export default StyledSection;
