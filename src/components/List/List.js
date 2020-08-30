import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './List.css';

const List = ({
  className,
  style = {},
  divided,
  children,

  ...props
}) => {
  const styles = { ...style };

  const classNames = ['list', divided ? 'divided' : '', className];

  return (
    <div className={classNames.join(' ')} style={styles} {...props}>
      {children}
    </div>
  );
};

List.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  divided: PropTypes.bool,
};

export default List;
