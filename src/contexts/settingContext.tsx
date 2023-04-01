/* eslint-disable @typescript-eslint/no-empty-function */
import { defaultSettings } from '../config';
import useLocalStorage from '../hooks/useLocalStorage';
import { createContext } from 'react';

const initialSetting: SettingsContextType = {
  ...defaultSettings,
  onToggleThemeMode: () => {}
};

type SettingsContextType = {
  themeMode: string;
  themeDirection: string;
  themeColorPresets: string;
  themeLayout: string;
  themeStretch: boolean;
  onToggleThemeMode: () => void;
};

const SettingsContext = createContext<SettingsContextType>({
  ...initialSetting
});

type SettingsConfigProps = {
  children: React.ReactNode;
  value?: SettingsContextType;
};

function SettingsProvider(props: SettingsConfigProps) {
  const [settings, setSettings] = useLocalStorage('settings', {
    ...initialSetting,
    onToggleThemeMode: () => {}
  });

  function onToggleThemeMode() {
    setSettings({
      ...settings,
      themeMode: settings.themeMode === 'light' ? 'dark' : 'light'
    });
  }

  return (
    <SettingsContext.Provider value={{ ...settings, onToggleThemeMode }}>
      {props.children}
    </SettingsContext.Provider>
  );
}

export { SettingsProvider, SettingsContext };
