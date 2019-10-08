import axios, { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios';

let config: AxiosRequestConfig = {
  baseURL: '',
};

const serve: AxiosInstance = axios.create(config);

serve.interceptors.request.use(requset => {

  return requset;
});

serve.interceptors.response.use((response: AxiosResponse) => {
  console.log(response)
  return response.data;
});

export default serve;
