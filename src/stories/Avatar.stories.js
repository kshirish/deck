import React from 'react';

import Avatar from '../components/Avatar';

export default {
  title: 'Avatar',
  component: Avatar,
  argTypes: {
    color: { control: 'color' },
  },
};

export const Sizes = () => (
  <>
    <Avatar src="https://picsum.photos/500" size="small" />
    <Avatar src="https://picsum.photos/500" size="medium" />
    <Avatar src="https://picsum.photos/500" size="large" />
  </>
);

export const Types = () => (
  <>
    <Avatar src="https://picsum.photos/500" />
    <Avatar src="https://picsum.photos/500" type="rounded" />
  </>
);

export const Initials = () => (
  <>
    <Avatar initials="TW" color="#4caf50" size="small" />
    <Avatar initials="TW" color="#4caf50" size="medium" />
    <Avatar initials="TW" color="#4caf50" size="large" />
    <br />
    <Avatar initials="TW" color="#4caf50" />
    <Avatar initials="TW" color="#2196f3" type="rounded" />
  </>
);
