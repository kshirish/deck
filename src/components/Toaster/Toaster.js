import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Toaster = ({
  autoClose,
  type,
  messages,
  onClose,

  ...props
}) => {
  useEffect(() => {
    if (!autoClose || !messages.length) return;

    const intervalId = setInterval(() => {
      onClose(messages[0].id);
    }, autoClose);

    return () => {
      clearInterval(intervalId);
    };
  }, [messages, autoClose, onClose]);

  return (
    <div {...props}>
      {messages.map((message) => (
        <div key={message.id} className={`toast toast-${message.type}`}>
          {message.text}{' '}
          <span onClick={() => onClose(message.id)} className="close">
            &#10005;
          </span>
        </div>
      ))}
    </div>
  );
};

const getCss = (props) => {
  const [tb, lr] = props.position.split('-');

  switch (true) {
    case lr === 'center':
      return `
        ${tb}: 60px;
        left : 50%;
        transform : translateX(-50%);
      `;

    default:
      return `
        ${tb}: 60px;
        ${lr}: 60px;
      `;
  }
};

const StyledToaster = styled(Toaster)`
  position: fixed;
  font-family: 'Manrope';
  font-size: 14px;
  ${(props) => getCss(props)}

  .toast {
    background: #424242;
    color: #ffffff;
    z-index: 3;
    padding: 15px;
    border-radius: 5px;
    margin-top: 10px;

    &.toast-success {
      color: #23621e;
      background-color: #e8f5e9;
    }

    &.toast-info {
      color: #0f62a4;
      background-color: #e3f2fd;
    }

    &.toast-warning {
      color: #70600c;
      background-color: #fffddb;
    }

    &.toast-error {
      color: #9f231a;
      background-color: #ffebee;
    }

    .close {
      margin-left: 10px;
      cursor: pointer;
    }
  }
`;

StyledToaster.propTypes = {
  className: PropTypes.string,
  autoClose: PropTypes.number,
  position: PropTypes.oneOf([
    'top-left',
    'top-right',
    'top-center',
    'bottom-left',
    'bottom-right',
    'bottom-center',
  ]),
  type: PropTypes.oneOf(['success', 'error', 'warning', 'info']),
  messages: PropTypes.array,
  onClose: PropTypes.func,
};

StyledToaster.defaultProps = {
  position: 'bottom-right',
};

export default StyledToaster;
