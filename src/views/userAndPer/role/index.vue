<template>
  <div class="app-container">
    <div class="search-div">
      <el-form label-width="70px" size="small">
        <el-row>
          <el-col :span="8">
            <el-form-item label="角色名称" style="">
              <el-input v-model="searchObj.roleName" style="width: 95%" placeholder="角色名称" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-button type="success" icon="el-icon-plus" size="mini" @click="add()">添加</el-button>
            <el-button type="danger" icon="el-icon-minus" size="mini" @click="batchRemove()">批量删除</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>

    <el-table  :data="datalist" stripe border style="width: 100%;margin-top: 10px;" @selection-change="handleSelectionChange">
        <el-table-column type="selection"/>

        <el-table-column  label="序号" width="70" align="center">
            <template slot-scope="scope">
                {{ (page - 1) * limit + scope.$index + 1 }}
            </template>
        </el-table-column>

        <el-table-column prop="roleName" label="角色名称" />
        <el-table-column prop="createTime" label="创建时间" width="160"/>
        <el-table-column label="操作" width="200" align="center">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" size="mini" @click="edit(scope.row.id)" title="修改"/>
          <el-button v-show="scope.row.roleName != '超级管理员' && scope.row.roleName != '普通用户'" type="danger" icon="el-icon-delete" size="mini" @click="removeDataById(scope.row.id)" title="删除"/>
          <el-button type="warning" icon="el-icon-baseball" size="mini" @click="showAssignAuth(scope.row)" title="分配权限"/>
        </template>
      </el-table-column>
    </el-table>

    <!-- 添加修改 -->
    <el-dialog title="添加/修改" :visible.sync="dialogVisible" width="40%" >
        <el-form ref="dataForm" :model="sysRole" label-width="150px" size="small" style="padding-right: 40px;">
            <el-form-item label="角色名称">
                <el-input v-model="sysRole.roleName"/>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false" size="small" icon="el-icon-refresh-right">取 消</el-button>
            <el-button type="primary" icon="el-icon-check" @click="saveOrUpdate()" size="small">确 定</el-button>
        </span>
    </el-dialog>

  </div>
</template>

<script>
// 引入定义接口的js文件
import roleApi from '@/api/userAndPer/role'

export default {
    data() {
        return {
            datalist: [], // 角色列表
            total: 0, // 总记录数
            page: 1, // 当前页
            limit: 10, // 每页显示记录数
            searchObj: {},
            sysRole: {}, // 封装添加表单数据
            dialogVisible: false,
            selectValue: []
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        removeDataById(id) {
            this.$confirm('此操作将永久删除该角色, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => { // 调用方法删除
                roleApi.removeId(id).then(response => {
                // 提示
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                })
                // 刷新
                this.fetchData()
                })
            })
        },
        fetchData(pageNum = 1) {
            // ajax请求
            this.page = pageNum
            roleApi.getPageList(this.page, this.limit, this.searchObj).then(res => {
                console.log(res)
                this.datalist = res.data.records
                this.total = res.data.total
            })
        },
        // 点击添加，弹出框
        add() {
            this.dialogVisible = true
            this.sysRole = {}
        },
        // 修改-数据回显
        edit(id) {
            // 弹出框
            this.dialogVisible = true
            roleApi.getRoleById(id).then(response => {
                this.sysRole = response.data
            })
        },
        // 点击确定
        saveOrUpdate() {
            // 判断添加还是修改
            if (!this.sysRole.id) {
                // 添加
                this.saveRole()
            } else {
                this.updateRole()
            }
        },
        // 添加的方法
        saveRole() {
            roleApi.addRole(this.sysRole).then(response => {
                // 提示
                this.$message({
                    type: 'success',
                    message: '添加成功!'
                })
                // 关闭弹框
                this.dialogVisible = false
                // 刷新页面
                this.fetchData()
            })
        },
        // 修改的方法
        updateRole() {
            roleApi.updateRole(this.sysRole).then(response => {
                // 提示
                this.$message({
                    type: 'success',
                    message: '修改成功!'
                })
                // 关闭弹框
                this.dialogVisible = false
                // 刷新页面
                this.fetchData()
            })
        },
        batchRemove() {
            // 判断
            if (this.selectValue.length === 0) {
                this.$message.warning('请选择要删除的记录！')
                return
            }
            this.$confirm('此操作将永久删除该角色, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                // 数组
                var idList = []
                // 获取多个复选框对应id，封装到数组里面
                // [1,2,3]
                for (var i = 0; i < this.selectValue.length; i++) {
                    var obj = this.selectValue[i]
                    // id值
                    var id = obj.id
                    // 放到数组里面
                    idList.push(id)
                }
                roleApi.batchRemoveRole(idList).then(response => {
                    // 提示
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    })
                    // 刷新
                    this.fetchData()
                })
            })
        },
        // 复选框发生变化执行方法
        handleSelectionChange(selection) {
            this.selectValue = selection
        },
        // 跳转分配菜单权限
        showAssignAuth(row) {
            this.$router.push('/system/assignAuth?id=' + row.id + '&roleName=' + row.roleName)
        }
    }
}
</script>

<style scoped>

</style>