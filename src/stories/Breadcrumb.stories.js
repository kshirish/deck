import React from 'react';

import Breadcrumb from '../components/Breadcrumb';

export default {
  title: 'Breadcrumb',
  component: Breadcrumb,
  argTypes: {},
};

export const Basic = () => (
  <Breadcrumb>
    <Breadcrumb.Section link>Home</Breadcrumb.Section>
    <Breadcrumb.Divider />
    <Breadcrumb.Section link>Store</Breadcrumb.Section>
    <Breadcrumb.Divider />
    <Breadcrumb.Section active>
      Search for:
      {' '}
      <a href="#">paper towels</a>
    </Breadcrumb.Section>
  </Breadcrumb>
);
