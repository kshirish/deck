import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './Form.css';

const Form = ({
  className,
  style = {},
  children,

  ...props
}) => {
  const styles = { ...style };

  const classNames = [className];

  return (
    <form className={classNames.join(' ')} style={styles} {...props}>
      {children}
    </form>
  );
};

Form.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Form;
