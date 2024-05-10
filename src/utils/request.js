// src/utils/request.js
import axios from 'axios'
import { Message } from 'element-ui'
import store from "@/store"
import { getToken } from '@/utils/auth'
// 确保你已经导入Vue Router
import router from '@/router'; // 假设你的Vue Router实例导出在这个位置

// 创建 Axios 实例
const service = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL, // api 的基础url前缀
    timeout: 25000, // 请求超时时间
    headers: {
        'Content-Type': "application/json; charset=utf-8"//我们返回的是一个json数据
    },
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么，比如添加 Token
    if (store.getters.token) {
        config.headers['token'] = getToken()
      }
    return config;
  },
  error => {
    // 对请求错误做些什么
    console.log(error)
    Promise.reject(error)
  }
);

// 响应拦截器
service.interceptors.response.use(
    response => {
      // 对响应数据做点什么，这里假设后端返回的数据结构包含 { code, data, message }
      const { code, data, msg } = response.data
      if (code === 200) {
        return data
      } else if(code === 301) {
        router.push('/login'); // 跳转到登录页面的逻辑
        Message.error(msg || '发生了一些错误，请重试！')
      } else {
        // 根据后端返回的 code 进行处理，这里以非 200 为例展示错误提示
        Message.error(msg || '发生了一些错误，请重试！')
        return Promise.reject(new Error(msg || 'Error'))
      }
    },
    error => {
      // 对响应错误做点什么
      console.error('err' + error)
  
      // 如果是网络错误等，也可以给出一个通用的错误提示
      Message.error('网络错误，请检查您的网络连接')
  
      return Promise.reject(error)
    }
)
  

export default service;