import { login, getInfo, logout } from '../../api/userApi'
import { getToken, setToken, removeToken } from '@/utils/auth'
import  { constantRoutes, resetRouter }  from '@/router/index'
import { generateRoutes } from '@/router/routeUtils'

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    avatar: '',
    buttons: [], // 新增
    menus: [] // 新增
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  // 新增
  SET_BUTTONS: (state, buttons) => {
    state.buttons = buttons
  },
  // 新增
  SET_MENUS: (state, menus) => {
    state.menus = menus
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(response => {
        const { token } = response
        console.log(token)
        commit('SET_TOKEN', token)
        setToken(token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
      if(!state.token) {
        console.log('token is null')
        return
      }
      getInfo().then(response => {
        if(response) {
          const { one } = response
          if (!one) {
            return reject('Verification failed, please Login again.')
          }
          // console.log(data.one.nickname)
          // const { name, avatar } = data
          if(one) {
            console.log(one)
            commit('SET_NAME', one.nickname)
            commit('SET_AVATAR', one.avatar)
            commit('SET_MENUS', one.menus)

            // 修正：传递 one.menus 到 loadAsyncRoutes
            dispatch('loadAsyncRoutes', one.menus).then(() => resolve(one)) // 确保异步操作完成
          }
  
          // commit('SET_BUTTONS', data.buttons)
          // commit('SET_MENUS', data.routers)
          resolve(one)
        }
      }).catch(error => {
        reject(error)
      })
    })
  },

  // 修改 loadAsyncRoutes 方法以接受参数并正确处理
  loadAsyncRoutes({ commit, state }, menus) { // 添加 menus 参数
    return new Promise((resolve, reject) => {
      try {
        // 使用传入的 menus 生成路由
        const childRoutes = generateRoutes(menus) // 确保 generateRoutes 函数接收正确的参数
        constantRoutes[1].children = childRoutes
        resetRouter()
        // 所有路由添加完毕，调用 resolve
        resolve()
      } catch (error) {
        reject(error)
      }
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      if(!state.token) {
        console.log('token is null')
        return
      }
      logout().then(response => {
          console.log('removeToken')
          removeToken()
          commit('RESET_STATE')
          resolve()
          resetRouter()
      })

    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
