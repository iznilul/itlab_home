import axios from 'axios'
import defaultSettings from '../config/defaultSettings'
import { ElNotification } from 'element-plus';
export const baseURL = process.env.NODE_ENV === 'development' ? defaultSettings.baseURL.dev : defaultSettings.baseURL.prod

const service = axios.create({
  baseURL: baseURL,
  timeout: 6000,
})

service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    const res = response.data
    // console.log(res)
    if (res.code !== 200) {
      //谜之bug，不能用this.$Notice
      ElNotification({
        title: '错误',
        message: '这是一条错误的提示消息',
      });
      return Promise.reject('数据返回失败')
    }
    // 如果接口正常，直接返回数据
    return res
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default service
