import request from '@/utils/request'

// 常量
const api_name = '/shiro/role'

export default {
    assignRoles(assginRoleVo) {
        return request({
          url: `${api_name}/doAssign`,
          method: 'post',
          data: assginRoleVo
        })
    },
    getRolesByUserId(userId) {
        return request({
          url: `${api_name}/toAssign/${userId}`,
          method: 'get'
        })
    },
    // 列表
    getPageList(page, limit, searchObj) {
      return request({
          // 接口路径
          url: `${api_name}/getPageList/${page}/${limit}`,
          method: 'get', // 提交方式
          // 参数
          params: searchObj
      })
    },
    // 角色的删除 功能
    removeId(id) {
      return request({
        // 接口路径
        url: `${api_name}/remove/${id}`,
        method: 'delete'
      })
    },
    // 角色的添加 功能
    addRole(role) {
      return request({
        // 接口路径
        url: `${api_name}/save`,
        method: 'post', // 提交方式
        // 参数
        data: role
      })
    },
    // 根据ID找到角色 功能
    getRoleById(id) {
      return request({
        // 接口路径
        url: `${api_name}/findRoleById/${id}`,
        method: 'post' // 提交方式
      })
    },
    // 角色的添加 功能
    updateRole(role) {
      return request({
        // 接口路径
        url: `${api_name}/update`,
        method: 'post', // 提交方式
        // 参数
        data: role
      })
    },
    // 批量删除
    batchRemoveRole(idList) {
      return request({
        // 接口路径
        url: `${api_name}/batchRemove`,
        method: 'delete', // 提交方式
        // 参数
        data: idList
      })
    },
}