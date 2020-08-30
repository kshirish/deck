import React from 'react';

import Loader from '../components/Loader';

export default {
  title: 'Loader',
  component: Loader,
  argTypes: {},
};

export const Sizes = () => (
  <>
    <Loader size="small" />
    <Loader size="medium" />
    <Loader size="large" />
  </>
);
