import axios, { AxiosInstance, AxiosResponse } from 'axios';

const apiClient: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STORE_ENDPOINT,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
apiClient.interceptors.request.use(function (config) {
    return config;
  }, function (error) {    
    return Promise.reject(error);
});

// Response interceptor
apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    if(error.response?.status >= 400){
        console.error('Error', error)
    }    
    return Promise.reject(error);
  }
);

export default apiClient;
