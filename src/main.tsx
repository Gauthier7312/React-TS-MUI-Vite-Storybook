// highlight
import './utils/highlight';

// scroll bar
import 'simplebar';
import 'simplebar/dist/simplebar.css';

import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './css/index.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/JWTContext';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from './redux/store';
import { SettingsProvider } from './contexts/settingContext';
import { CollapseDrawerProvider } from './contexts/CollapseDrawerContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AuthProvider>
    <HelmetProvider>
      <ReduxProvider store={store}>
        <PersistGate persistor={persistor}>
          <SettingsProvider>
            <CollapseDrawerProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </CollapseDrawerProvider>
          </SettingsProvider>
        </PersistGate>
      </ReduxProvider>
    </HelmetProvider>
  </AuthProvider>
);
