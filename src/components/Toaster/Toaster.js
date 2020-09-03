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

  ${(props) => getCss(props)}

  .toast {
    z-index: 3;
    padding: ${(props) => props.theme.gutter};
    margin-top: 10px;
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme.darkestGrey};
    border-radius: ${(props) => props.theme.borderRadius};

    &.toast-success {
      color: ${(props) => props.theme.successShades[0]};
      background-color: ${(props) => props.theme.successShades[2]};
    }

    &.toast-info {
      color: ${(props) => props.theme.infoShades[0]};
      background-color: ${(props) => props.theme.infoShades[2]};
    }

    &.toast-warning {
      color: ${(props) => props.theme.warningShades[0]};
      background-color: ${(props) => props.theme.warningShades[2]};
    }

    &.toast-error {
      color: ${(props) => props.theme.errorShades[0]};
      background-color: ${(props) => props.theme.errorShades[2]};
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
