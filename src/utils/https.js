import axios from 'axios';
import { notification } from 'antd';

const httpClient = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 10000,
});

httpClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { response } = error;
    notification.error({
      message: '网络请求失败！',
      description: response.data?.message,
    });
    return response;
  }
);

export const isSuccessRequest = (code) => {
  return code >= 200 && code < 300;
};

export default httpClient;
