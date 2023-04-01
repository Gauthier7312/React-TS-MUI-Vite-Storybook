import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/material-icons';

import { CssBaseline } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import palette from '../src/themes/palette';
import ThemeProvider from '../src/themes';

//decorators
export const decorators = [
  withThemeFromJSXProvider({
  themes: {
    light: palette.light,
    dark: palette.dark,
  },
  defaultTheme: `light`,
  Provider: ThemeProvider,
  GlobalStyles: CssBaseline,
})];

// parameters 
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
