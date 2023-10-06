import { alpha } from '@mui/material/styles';

function createGradient(color1: string, color2: string) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

function createGradientHome(color1: string, color2: string) {
  return `linear-gradient(43deg, ${color1}, ${color2})`;
}
interface GradientsPaletteOptions {
  primary: string;
  info: string;
  success: string;
  warning: string;
  error: string;
  home: string;
}
interface ChartPaletteOptions {
  violet: string[];
  blue: string[];
  green: string[];
  yellow: string[];
  red: string[];
}

declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    neutral: string;
    grey: string;
    dark: string;
  }
  interface SimplePaletteColorOptions {
    lighter: string;
    darker: string;
  }
  interface PaletteColor {
    lighter: string;
    darker: string;
  }
  interface Palette {
    gradients: GradientsPaletteOptions;
    chart: ChartPaletteOptions;
  }
  interface PaletteOptions {
    gradients: GradientsPaletteOptions;
    chart: ChartPaletteOptions;
  }
}

const GREEN = {
  lighter: '#D1F8CF',
  light: '#6ED97F',
  main: '#17833E',
  dark: '#0B5E39',
  darker: '#074B34'
};

const GOLD = {
  lighter: '#FEF6D1',
  light: '#FEDA76',
  main: '#FEB31C',
  dark: '#DA9114',
  darker: '#B6730E'
};

const INFO = {
  lighter: '#DBF4FE',
  light: '#94D3FE',
  main: '#4EA5FC',
  dark: '#2760B5',
  darker: '#0E2E78'
};

const SUCCESS = {
  ...GREEN
};

const ERROR = {
  lighter: '#FFECDB',
  light: '#FFB693',
  main: '#FF6A4C',
  dark: '#DB4637',
  darker: '#93181F'
};

const WARNING = {
  lighter: '#FEFACE',
  light: '#FEEC6E',
  main: '#FCD80F',
  dark: '#D8B60A',
  darker: '#B59507'
};

const GREY = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#414141',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
  500_8: alpha('#414141', 0.08),
  500_12: alpha('#414141', 0.12),
  500_16: alpha('#414141', 0.16),
  500_24: alpha('#414141', 0.24),
  500_32: alpha('#414141', 0.32),
  500_48: alpha('#414141', 0.48),
  500_56: alpha('#414141', 0.56),
  500_80: alpha('#414141', 0.8)
};

const GRADIENTS = {
  primary: createGradient(GREEN.light, GREEN.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
  home: createGradientHome(GREEN.darker, GREEN.main)
};

const COMMON = {
  common: { black: '#414141', white: '#fff' },
  primary: { ...GOLD, contrastText: '#fff' },
  secondary: { ...GREEN, contrastText: '#fff' },
  grey: GREY,
  error: { ...ERROR, contrastText: '#fff' },
  warning: { ...WARNING, contrastText: GREY[800] },
  info: { ...INFO, contrastText: '#fff' },
  success: { ...SUCCESS, contrastText: GREY[800] },
  divider: GREY[500_24],
  gradients: GRADIENTS,
  action: {
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48
  }
};

const ACTION = {
  active: GREY[600],
  ...COMMON.action
};

const palette = {
  light: {
    ...COMMON,
    mode: 'light',
    text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
    background: { paper: '#fff', default: '#fff', neutral: '#aaa' },
    action: { ...ACTION }
  },
  dark: {
    ...COMMON,
    mode: 'dark',
    text: { primary: '#fff', secondary: GREY[500], disabled: GREY[600] },
    background: { paper: GREY[800], default: GREY[900], neutral: '#777' },
    action: { ...ACTION }
  }
};

export default palette;
