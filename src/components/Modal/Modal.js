import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Hooks
import useClickOutside from '../../hooks/useClickOutside';

const Modal = ({
  onOpen,
  onClose,
  open,
  trigger,
  children,

  ...props
}) => {
  const dialogRef = useRef(null);

  useClickOutside(dialogRef, onClose);

  return (
    <>
      {React.cloneElement(trigger, { onClick: onOpen })}
      {open ? (
        <div {...props}>
          <div ref={dialogRef} className="modal-dialog">
            {children}
          </div>
        </div>
      ) : null}
    </>
  );
};

const StyledModal = styled(Modal)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);

  .modal-dialog {
    border-radius: ${(props) => props.theme.borderRadius};
    position: fixed;
    background: ${(props) => props.theme.white};
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

StyledModal.propTypes = {
  className: PropTypes.string,
  open: PropTypes.bool,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  trigger: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
};

StyledModal.defaultProps = {};

export default StyledModal;
