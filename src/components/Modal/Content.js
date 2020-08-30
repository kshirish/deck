import React from 'react';
import PropTypes from 'prop-types';

const Content = ({
  className,
  style = {},
  children,

  ...props
}) => {
  const styles = { ...style };

  const classNames = ['modal-content', className];

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
