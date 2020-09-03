import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

// Constants
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import typography from '../../styles/typography';
import misc from '../../styles/misc';
import mixins from '../../styles/mixins';

const defaultTheme = {
  ...colors,
  ...fonts,
  ...typography,
  ...misc,
  ...mixins,
};

const Theme = ({ theme, children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  theme: PropTypes.object,
};

Theme.defaultProps = {
  theme: defaultTheme,
};

export default Theme;
