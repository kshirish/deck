import React from 'react';
import PropTypes from 'prop-types';

const Section = ({
  className,
  style = {},
  children,
  active,
  link,

  ...props
}) => {
  let styles = { ...style };

  const classNames = [
    'breadcrumb-item',
    active ? 'active' : '',
    link ? 'link' : '',
    className,
  ];

  return (
    <div className={classNames.join(' ')} style={styles} {...props}>
      {children}
    </div>
  );
};

Section.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  active: PropTypes.bool,
  link: PropTypes.bool,
};

export default Section;
