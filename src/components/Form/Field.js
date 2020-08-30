import React from 'react';
import PropTypes from 'prop-types';

const Field = ({
  className,
  style = {},
  children,

  ...props
}) => {
  const styles = { ...style };

  const classNames = ['form-field', className];

  return (
    <div className={classNames.join(' ')} style={styles} {...props}>
      {children}
    </div>
  );
};

Field.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Field;
