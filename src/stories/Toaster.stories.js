import React, { useState } from 'react';

import Toaster from '../components/Toaster';
import Button from '../components/Button';

export default {
  title: 'Toaster',
  component: Toaster,
  argTypes: {},
};

export const Basic = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'I am a toast!' },
    { id: 2, text: 'I am another toast!' },
  ]);

  const onToastClose = (messageId) => {
    const updatedMessages = messages.filter(
      message => message.id !== messageId,
    );
    setMessages(updatedMessages);
  };

  const addMessage = () => {
    const updatedMessages = messages.concat({
      id: Date.now(),
      text: 'One more!',
    });

    setMessages(updatedMessages);
  };

  return (
    <>
      <Button onClick={addMessage}>Show Toast</Button>
      <Toaster
        onClose={onToastClose}
        messages={messages}
        autoClose={2000}
        position="bottom-left"
      />
    </>
  );
};

export const Types = () => (
  <Toaster
    messages={[
      { id: 1, text: 'This is a success toast!', type: 'success' },
      { id: 2, text: 'This is a error toast!', type: 'error' },
      { id: 3, text: 'This is a warning toast!', type: 'warning' },
      { id: 4, text: 'This is a info toast!', type: 'info' },
    ]}
    position="bottom-right"
  />
);
