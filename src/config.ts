export interface SettingsType {
  themeMode: string;
  themeDirection: string;
  themeColorPresets: string;
  themeLayout: string;
  themeStretch: boolean;
}

// export const HOST_API = process.env.REACT_APP_HOST_API_KEY || '';
// export const NO_DASHBOARD_API_ROOT = process.env.REACT_NO_DASHBOARD_API_ROOT_KEY || '';

export const defaultSettings: SettingsType = {
  themeMode: 'light',
  themeDirection: 'ltr',
  themeColorPresets: 'default',
  themeLayout: 'horizontal',
  themeStretch: false
};

export const HEADER = {
  MOBILE_HEIGHT: 64,
  MAIN_DESKTOP_HEIGHT: 88,
  DASHBOARD_DESKTOP_HEIGHT: 92,
  DASHBOARD_DESKTOP_OFFSET_HEIGHT: 92 - 32
};

export const NAVBAR = {
  BASE_WIDTH: 260,
  DASHBOARD_WIDTH: 550,
  DASHBOARD_WIDTH_FULL: `100%`,
  DASHBOARD_COLLAPSE_WIDTH: 88,
  //
  DASHBOARD_ITEM_ROOT_HEIGHT: 48,
  DASHBOARD_ITEM_SUB_HEIGHT: 40,
  DASHBOARD_ITEM_HORIZONTAL_HEIGHT: 32
};
