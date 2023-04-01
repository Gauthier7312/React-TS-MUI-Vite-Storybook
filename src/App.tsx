import { useState } from 'react';
import { Button } from '@mui/material';
import ThemeProvider from './themes';

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider>
      <Button variant="contained" onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
    </ThemeProvider>
  );
}

export default App;
