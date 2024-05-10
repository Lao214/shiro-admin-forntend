import Cookies from 'js-cookie'

const TokenKey = 'token'
const EXPIRATION_KEY = 'ec-token-expiration'

export function getToken() {
  const expiration = Cookies.get(EXPIRATION_KEY);
  if (expiration && new Date() > new Date(expiration)) {
    // Token过期，移除Token和过期时间，并返回null
    removeToken();
    return null;
  }
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  console.log(token)
  const expiration = new Date();
  expiration.setDate(expiration.getDate() + 30); // 设置有效期为30天
  Cookies.set(EXPIRATION_KEY,expiration.toISOString())
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function checkTokenExist() {
  const token = getToken();
  return !!token; // Return true if token exists, false otherwise
}
