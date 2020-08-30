import React from 'react';
import PropTypes from 'prop-types';

const Item = ({
  className,
  style = {},
  children,

  ...props
}) => {
  const styles = { ...style };

  const classNames = ['list-item', className];

  return (
    <div className={classNames.join(' ')} style={styles} {...props}>
      {children}
    </div>
  );
};

Item.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Item;
