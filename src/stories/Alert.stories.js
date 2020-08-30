import React from 'react';

import Alert from '../components/Alert';

export default {
  title: 'Alert',
  component: Alert,
  argTypes: {},
};

export const Types = () => (
  <>
    <Alert type="info">
      <strong>Hey!</strong> This is an info alert.
    </Alert>
    <Alert type="success">
      <strong>Hey!</strong> This is a success alert.
    </Alert>
    <Alert type="warning">
      <strong>Hey!</strong> This is a warning alert.
    </Alert>
    <Alert type="error">
      <strong>Hey!</strong> This is a error alert.
    </Alert>
  </>
);
