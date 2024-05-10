import request from '@/utils/request'

// 常量
const api_name = '/shiro/user'

export default {
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
    // 根据ID找到用户 功能
    getUserById(id) {
        return request({
            // 接口路径
            url: `${api_name}/getUser/${id}`,
            method: 'get' // 提交方式
        })
    },
    // 用户的修改 功能
    updateUser(user) {
        return request({
            // 接口路径
            url: `${api_name}/update`,
            method: 'post', // 提交方式
            // 参数
            data: user
        })
    },
    // 用户的添加 功能
    addUser(user) {
        return request({
            // 接口路径
            url: `${api_name}/addUser`,
            method: 'post', // 提交方式
            // 参数
            data: user
        })
    },
    // 用户的删除 功能
    removeId(id) {
        return request({
            // 接口路径
            url: `${api_name}/remove/${id}`,
            method: 'delete' // 提交方式
        })
    },
}