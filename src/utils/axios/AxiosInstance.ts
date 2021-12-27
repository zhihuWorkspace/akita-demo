import axios, { AxiosInstance } from 'axios';

export function createAxios(): AxiosInstance {

  const axiosInstance = axios.create({
    baseURL: `https://api.tvmaze.com`,
    timeout: 1000 * 30,
  });

  // Add a request interceptor
  axiosInstance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return axiosInstance;
}
