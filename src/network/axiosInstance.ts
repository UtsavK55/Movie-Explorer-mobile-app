import axios from 'axios';
import {BASE_URL} from './apiConstant';
import {token} from '@src/constants/token';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${token}`,
  },
});

// Define common API methods
const _get = (url: string, config?: {}) => {
  return axiosInstance.get(url, config);
};

const _delete = (url: string, config?: {}) => {
  return axiosInstance.delete(url, config);
};

const _put = (url: string, data = {}, config?: {}) => {
  return axiosInstance.put(url, data, config);
};

const _post = (url: string, data = {}, config?: {}) => {
  return axiosInstance.post(url, data, config);
};

// Export API methods
export {_get, _delete, _put, _post};
