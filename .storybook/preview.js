import React from 'react';

// Components
import { Theme, GlobalStyle } from '../src';

// Styles
import typography from '../src/styles/typography';
import fonts from '../src/styles/fonts';
import colors from '../src/styles/colors';
import './style.css';

export const parameters = {
  // layout: 'centered',
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle
        fontFamily={fonts.manrope}
        fontColor={colors.textPrimary}
        fontSize={typography.fontSizeBody}
        fontWeight={typography.fontWeightRegular}
      />
      <Theme>
        <Story />
      </Theme>
    </>
  ),
];
