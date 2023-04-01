import { useState } from 'react';
import ThemeProvider from './themes';
import { Button } from './design/buttons/Button';

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
