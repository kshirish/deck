import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './Grid.css';

const Row = ({
  className,
  style = {},
  mdStart,
  mdCenter,
  mdEnd,
  mdTop,
  mdMiddle,
  mdBottom,
  mdAround,
  mdBetween,
  children,

  ...props
}) => {
  const styles = { ...style };

  if (mdStart) styles.justifyContent = 'flex-start';

  if (mdCenter) styles.justifyContent = 'center';

  if (mdEnd) styles.justifyContent = 'flex-end';

  if (mdTop) styles.alignItems = 'flex-start';

  if (mdMiddle) styles.alignItems = 'center';

  if (mdBottom) styles.alignItems = 'flex-end';

  if (mdAround) styles.justifyContent = 'space-around';

  if (mdBetween) styles.justifyContent = 'space-between';

  const classNames = ['row', className];

  return (
    <div className={classNames.join(' ')} style={styles} {...props}>
      {children}
    </div>
  );
};

Row.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Row;
