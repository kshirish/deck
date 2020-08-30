import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// Styles
import './Toaster.css';

const Toaster = ({
  className,
  style = {},
  autoClose,
  position = 'bottom-right',
  type,
  messages,
  onClose,

  ...props
}) => {
  const styles = { ...style };

  const classNames = ['toaster', className];
  const [tb, lr] = position.split('-');

  styles[tb] = 60;

  if (lr === 'center') {
    styles.left = '50%';
    styles.transform = 'translateX(-50%)';
  } else styles[lr] = 60;

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
    <div className={classNames.join(' ')} style={styles} {...props}>
      {messages.map((message) => (
        <div key={message.id} className={`toast toast-${message.type}`}>
          {message.text}
          {' '}
          <span onClick={() => onClose(message.id)} className="close">
            &#10005;
          </span>
        </div>
      ))}
    </div>
  );
};

Toaster.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
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

export default Toaster;
