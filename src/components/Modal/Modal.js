import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// Hooks
import useClickOutside from '../../hooks/useClickOutside';

// Styles
import './Modal.css';

const Modal = ({
  className,
  style = {},
  onOpen,
  onClose,
  open,
  trigger,
  children,

  ...props
}) => {
  const styles = { ...style };

  const dialogRef = useRef(null);
  const classNames = ['modal', className];

  useClickOutside(dialogRef, onClose);

  return (
    <>
      {React.cloneElement(trigger, { onClick: onOpen })}
      {open ? (
        <div className={classNames.join(' ')} style={styles} {...props}>
          <div ref={dialogRef} className="modal-dialog">
            {children}
          </div>
        </div>
      ) : null}
    </>
  );
};

Modal.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  open: PropTypes.bool,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  trigger: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
};

export default Modal;
