import axios from 'axios';
// import { HOST_API, NO_DASHBOARD_API_ROOT } from '../config';

export const HOST_API = '';
export const NO_DASHBOARD_API_ROOT = '';

const axiosInstance = axios.create({
  baseURL: HOST_API
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;

// ----------------------------------------------------------------------

const noDashboardApi = axios.create({
  baseURL: NO_DASHBOARD_API_ROOT
});

noDashboardApi.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export { noDashboardApi };
