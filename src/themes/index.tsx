import React, { useContext, useMemo } from 'react';
import { CssBaseline } from '@mui/material';
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider
} from '@mui/material/styles';
import { SettingsContext } from '../contexts/settingContext';
import breakpoints from './breakpoint';
import palette from './palette';
import typography from './typography';
import shadows, { customShadows } from './shadows';
import ComponentsOverrides from './overrides';

type ThemeConfigProps = {
  children: React.ReactNode;
};

export default function ThemeProvider(props: ThemeConfigProps) {
  const settings = useContext(SettingsContext);
  const { themeMode } = settings;
  const isLight = themeMode === 'light';

  const themeOptions: any = useMemo(
    () => ({
      palette: isLight ? { ...palette.light, mode: 'light' } : { ...palette.dark, mode: 'dark' },
      typography,
      breakpoints,
      shadows: isLight ? shadows.light : shadows.dark,
      customShadows: isLight ? customShadows.light : customShadows.dark
    }),
    [isLight]
  );

  const theme = createTheme(themeOptions);
  theme.components = ComponentsOverrides(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
