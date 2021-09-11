import axios from 'axios'
import defaultSettings from '../config/defaultSettings'

export const baseURL = process.env.NODE_ENV === 'development' ? defaultSettings.baseURL.dev : defaultSettings.baseURL.prod

const service = axios.create({
  baseURL: baseURL,
  timeout: 6000,
})

service.interceptors.request.use(
  (config) => {
  },
  (error) => {

  }
)

service.interceptors.response.use(
  (response) => {
  },
  (error) => {
  }
)

export default service
