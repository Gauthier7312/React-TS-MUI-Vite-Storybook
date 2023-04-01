import { createContext, ReactNode, useEffect, useReducer } from 'react';
// import axios from 'utils/axios';
import { isValidToken, setSession } from '../utils/jwt';

// ----------------------------------------------------------------------

type JWTContextType = {
  isAuthenticated: boolean;
  isInitialized: boolean;
  user: { name: string };
  method: 'jwt';
  login: (response: { refresh_token: string; token: string }) => Promise<void>;
  logout: () => Promise<void>;
};

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null
};

const jwtReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'INITIALIZE':
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        isInitialized: true,
        user: action.payload.user
      };
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null
      };

    default:
      return state;
  }
};

const AuthContext = createContext<JWTContextType | null>(null);

// ----------------------------------------------------------------------

function AuthProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(jwtReducer, initialState);

  useEffect(() => {
    const initialize = () => {
      try {
        const accessToken = window.localStorage.getItem('token');

        if (accessToken && isValidToken(accessToken)) {
          setSession(accessToken);

          dispatch({
            type: 'INITIALIZE',
            payload: {
              isAuthenticated: true,
              user: { name: 'kader' }
            }
          });
        } else {
          dispatch({
            type: 'INITIALIZE',
            payload: {
              isAuthenticated: false,
              user: null
            }
          });
        }
      } catch (err) {
        dispatch({
          type: 'INITIALIZE',
          payload: {
            isAuthenticated: false,
            user: null
          }
        });
      }
    };

    initialize();
  }, []);

  const login = async (response: { refresh_token: string; token: string }) => {
    const { token } = response;
    setSession(token);
    dispatch({
      type: 'LOGIN',
      payload: {
        user: { name: 'kader' }
      }
    });
  };

  const logout = async () => {
    setSession(null);
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: 'jwt',
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
