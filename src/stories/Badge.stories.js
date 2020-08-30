import React from 'react';

import Badge from '../components/Badge';

export default {
  title: 'Badge',
  component: Badge,
  argTypes: {},
};

export const Basic = () => <Badge>badge</Badge>;

export const Colored = () => (
  <>
    <Badge color="red">red</Badge>
    <Badge color="orange">orange</Badge>
    <Badge color="yellow">yellow</Badge>
    <Badge color="olive">olive</Badge>
    <Badge color="green">green</Badge>
    <Badge color="teal">teal</Badge>
    <Badge color="blue">blue</Badge>
    <Badge color="violet">violet</Badge>
    <Badge color="pink">pink</Badge>
    <Badge color="brown">brown</Badge>
    <Badge color="grey">grey</Badge>
    <Badge color="black">black</Badge>
  </>
);

export const WithIcon = () => {
  const docIcon = (
    <img
      src="https://image.flaticon.com/icons/svg/149/149338.svg"
      alt="Documents"
    />
  );

  const userIcon = (
    <img src="https://image.flaticon.com/icons/svg/149/149452.svg" alt="User" />
  );

  const closeIcon = (
    <img
      src="https://image.flaticon.com/icons/svg/149/149147.svg"
      alt="Close"
    />
  );

  return (
    <>
      <Badge icon={docIcon} iconPosition="left">
        22
      </Badge>
      <Badge icon={userIcon} iconPosition="right">
        22
      </Badge>
      <Badge icon={closeIcon} iconPosition="right">
        Dog
      </Badge>
      <Badge icon={closeIcon} iconPosition="right">
        Cat
      </Badge>
      <Badge icon={closeIcon} iconPosition="right">
        Kangaroo
      </Badge>
    </>
  );
};
