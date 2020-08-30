import React from 'react';

import List from '../components/List';

export default {
  title: 'List',
  component: List,
  argTypes: {},
};

export const Basic = () => (
  <List>
    <List.Item>Apple</List.Item>
    <List.Item>Pears</List.Item>
    <List.Item>Coconut</List.Item>
  </List>
);

export const Divided = () => (
  <List divided>
    <List.Item>Apple</List.Item>
    <List.Item>Pears</List.Item>
    <List.Item>Coconut</List.Item>
  </List>
);
