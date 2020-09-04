import React from 'react';

// Components
import { Theme, GlobalStyle } from '../src';

export const parameters = {
  // layout: 'centered',
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Theme>
        <Story />
      </Theme>
    </>
  ),
];
