import { useState } from 'react';

function useLocalStorage(key: string, initialValue?: any) {
  const [state, setState] = useState(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: any) => {
    try {
      const valueToStore = value instanceof Function ? value(state) : value;
      setState(valueToStore);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      throw {
        type: 'UpdateLocalStorageError',
        error: error
      };
    }
  };

  return [state, setValue];
}

export default useLocalStorage;
