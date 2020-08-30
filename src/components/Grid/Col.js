import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './Grid.css';

const Col = ({
  className,
  style = {},
  md,
  mdOffset,
  children,

  ...props
}) => {
  let styles = { ...style };

  if (md) {
    const maxWidthMd = (md / 12) * 100;

    styles.flexBasis = `${maxWidthMd}%`;
    styles.maxWidth = `${maxWidthMd}%`;

    if (mdOffset) {
      styles.marginLeft = `${100 - maxWidthMd}%`;
    }
  }

  const classNames = ['col', className];

  return (
    <div className={classNames.join(' ')} style={styles} {...props}>
      {children}
    </div>
  );
};

Col.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  md: PropTypes.number,
  mdOffset: PropTypes.number,
};

export default Col;
