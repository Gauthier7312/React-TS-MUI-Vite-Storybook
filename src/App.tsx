import Router from './router';
import ThemeProvider from './themes';
import ToastProvider from './components/ToastProvider';
import ScrollToTop from './components/ScrollToTop';
import LoadingScreen from './design/loader/LoadingScreen';
import { Suspense } from 'react';

function App() {
  return (
    <ThemeProvider>
      <Suspense
        fallback={
          <LoadingScreen
            sx={{
              top: 0,
              left: 0,
              width: 1,
              zIndex: 9999,
              position: 'fixed'
            }}
          />
        }
      >
        <ScrollToTop />
        <Router />
        <ToastProvider />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
