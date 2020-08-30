import React from 'react';
import PropTypes from 'prop-types';

const Content = ({
  className,
  style = {},
  children,

  ...props
}) => {
  let styles = { ...style };

  const classNames = ['card-content', className];

  return (
    <div className={classNames.join(' ')} style={styles} {...props}>
      {children}
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Content;
