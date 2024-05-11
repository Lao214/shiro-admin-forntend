import request from '@/utils/request'

// 常量
const api_name = '/shiro/per'

export default {
  /*
  获取权限（列表）
  */
  findNodes() {
    return request({
      url: `${api_name}/findNodes`,
      method: 'get'
    })
  },
  /*
    去某个角色的权限列表
  */
  toAssign(roleId) {
    return request({
      url: `${api_name}/toAssign/${roleId}`,
      method: 'get'
    })
  },
  /*
    给某个角色授权
  */
  doAssign(assginMenuVo) {
        return request({
        url: `${api_name}/doAssign`,
        method: 'post',
        data: assginMenuVo
        })
  },
  /*
  保存
  */
  save(sysMenu) {
    return request({
      url: `${api_name}/save`,
      method: 'post',
      data: sysMenu
    })
  },
  /*
  根据id修改
  */
  updateById(sysMenu) {
    return request({
      url: `${api_name}/update`,
      method: 'post',
      data: sysMenu
    })
  },
  /*
    删除
  */
  removeById(id) {
    return request({
      url: `${api_name}/remove/${id}`,
      method: 'delete'
    })
  },
}