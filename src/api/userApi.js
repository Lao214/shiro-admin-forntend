import request from '../utils/request'

export default {

}

export function login(loginForm) {
  return request({
    url: '/shiro/user/login',
    method: 'post',
    data: loginForm
  })
}

export function logout() {
  return request({
    url: '/shiro/user/logout',
    method: 'post',
  })
}

export function getInfo() {
  return request({
    url: '/shiro/user/info',
    method: 'get'
  })
}