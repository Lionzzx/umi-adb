import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';

let config: AxiosRequestConfig = {
  baseURL: '/api'
}

const serve: AxiosInstance = axios.create(config)

serve.interceptors.request.use((requset) => {

  return requset
})

serve.interceptors.response.use((response) => {
  return response.data
})


export default serve
