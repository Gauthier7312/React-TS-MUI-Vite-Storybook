import jwtDecode from 'jwt-decode';
import axios from './axios';

const isValidToken = (accessToken: string) => {
  if (!accessToken) {
    return false;
  }

  const decoded = jwtDecode<{ exp: number }>(accessToken);
  const currentTime = Date.now() / 1000;

  return decoded.exp > currentTime;
};

const handleTokenExpired = (exp: number) => {
  const currentTime = Date.now();
  const timeLeft = exp * 1000 - currentTime;
  const expiredTimer = window.setTimeout(() => {
    // console.log('expired deconnexion');
  }, timeLeft);
  window.clearTimeout(expiredTimer);
};

// ----------------------------------------------------------------------

const setSession = (accessToken: string | null) => {
  if (accessToken) {
    localStorage.setItem('token', accessToken);
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    const { exp } = jwtDecode<{ exp: number }>(accessToken);
    handleTokenExpired(exp);
  } else {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common.Authorization;
  }
};

export { isValidToken, setSession };
