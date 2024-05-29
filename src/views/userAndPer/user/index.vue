<template>
  <div class="app-container">
    <div class="search-div">
      <el-form label-width="70px" size="small">
        <el-row>
          <el-col :span="6">
            <el-form-item label="工号" style="">
              <el-input v-model="searchObj.username" style="width: 95%" placeholder="工号" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="姓名">
              <el-input v-model="searchObj.nickname" style="width: 95%" placeholder="姓名" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="厂区">
              <el-input v-model="searchObj.factory" style="width: 95%" placeholder="厂区" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="事业群">
              <el-input v-model="searchObj.unit" style="width: 100%" placeholder="事业群" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row style="display:flex;justify-content: right;">
          <el-button type="success" icon="el-icon-plus" size="mini" @click="add()">添加</el-button>
          <!-- <el-button type="success" icon="el-icon-plus" size="mini" @click="upload()">导入</el-button> -->
          <el-button type="primary" icon="el-icon-search" size="mini" @click="fetchData()">搜索</el-button>
        </el-row>
      </el-form>
    </div>

    <div class="table">
      <el-table :data="datalist" stripe border >

        <el-table-column label="序号" width="70" align="center">
          <template slot-scope="scope">
            {{ (page - 1) * limit + scope.$index + 1 }}
          </template>
        </el-table-column>

        <el-table-column prop="username" label="工号" width="180" />
        <el-table-column prop="nickname" label="昵称" width="180" />
        <el-table-column prop="factory" label="厂区" width="180" />
        <el-table-column prop="unit" label="事业群" width="180" />
        <el-table-column prop="createTime" label="注册时间" width="" />

        <el-table-column label="操作" align="center" fixed="right">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" size="mini" title="修改" @click="edit(scope.row.id)" />
            <el-button type="danger" icon="el-icon-delete" size="mini" title="删除" @click="removeDataById(scope.row.id)" />
            <el-button type="warning" icon="el-icon-baseball" size="mini" title="分配角色" @click="showAssignRole(scope.row)" />
          </template>
        </el-table-column>

      </el-table>

      <!-- 分页组件 -->
      <el-pagination :current-page="page" :total="total" :page-size="limit" style="padding: 30px 0; text-align: center;" layout="total, prev, pager, next, jumper" @current-change="fetchData"/>

      <el-dialog title="添加/修改" :visible.sync="dialogVisible" width="67%">
        <el-form ref="dataForm" :model="sysUser" label-width="100px" size="small" style="padding-right: 40px;">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="sysUser.username" />
          </el-form-item>
          <el-form-item label="姓名" prop="nickname">
            <el-input v-model="sysUser.nickname" />
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="sysUser.password" />
          </el-form-item>
          <el-form-item label="厂区" prop="factory">
            <el-input v-model="sysUser.factory" />
          </el-form-item>
          <el-form-item label="事业群" prop="unit">
            <el-input v-model="sysUser.unit" />
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button size="small" icon="el-icon-refresh-right" @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" icon="el-icon-check" size="small" @click="saveOrUpdate()">确 定</el-button>
        </span>
      </el-dialog>

      <el-dialog title="分配角色" :visible.sync="dialogRoleVisible">
        <el-form label-width="80px">
          <el-form-item label="用户名">
            <el-input disabled :value="sysUser.username" />
          </el-form-item>

          <el-form-item label="角色列表">
            <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">全选</el-checkbox>
            <div style="margin: 15px 0;" />
            <el-checkbox-group v-model="userRoleIds" @change="handleCheckedChange">
              <el-checkbox v-for="role in allRoles" :key="role.id" :label="role.id">{{ role.roleName }}</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-form>
        <div slot="footer">
          <el-button type="primary" size="small" @click="assignRole">保存</el-button>
          <el-button size="small" @click="dialogRoleVisible = false">取消</el-button>
        </div>
      </el-dialog>

    </div>
  </div>
</template>

<script>
import userApi from '@/api/userAndPer/user'
import roleApi from '@/api/userAndPer/role'

export default {
  data() {
    return {
      createTimes: '',
      listLoading: false,
      datalist: null,
      total: 0, // 数据库中的总记录数
      page: 1, // 默认页码
      limit: 10, // 每页记录数
      searchObj: {}, // 查询表单对象

      dialogVisible: false,
      sysUser: {},

      dialogRoleVisible: false,
      allRoles: [], // 所有角色列表
      userRoleIds: [], // 用户的角色ID的列表
      isIndeterminate: false, // 是否是不确定的
      checkAll: false, // 是否全选
    }
  },
  created() {
    // 调用列表方法
    this.fetchData()
  },
  methods: {
    // 展示分配角色
    showAssignRole(row) {
      this.sysUser = row
      this.dialogRoleVisible = true
      roleApi.getRolesByUserId(row.id).then(response => {
        this.allRoles = response.data.allRoles
        console.log(this.allRoles)
        this.userRoleIds = response.data.userRoleIds
        console.log(this.userRoleIds)
        this.checkAll = this.userRoleIds.length === this.allRoles.length
        this.isIndeterminate = this.userRoleIds.length > 0 && this.userRoleIds.length < this.allRoles.length
      })
    },
    /*
      全选勾选状态发生改变的监听
    */
    handleCheckAllChange(value) { // value 当前勾选状态true/false
      // 如果当前全选, userRoleIds就是所有角色id的数组, 否则是空数组
      this.userRoleIds = value ? this.allRoles.map(item => item.id) : []
      // 如果当前不是全选也不全不选时, 指定为false
      this.isIndeterminate = false
    },
    /*
      角色列表选中项发生改变的监听
    */
    handleCheckedChange(value) {
      const { userRoleIds, allRoles } = this
      this.checkAll = userRoleIds.length === allRoles.length && allRoles.length > 0
      this.isIndeterminate = userRoleIds.length > 0 && userRoleIds.length < allRoles.length
    },
    // 分配角色
    assignRole() {
      const assginRoleVo = {
        userId: this.sysUser.id,
        roleIdList: this.userRoleIds
      }
      roleApi.assignRoles(assginRoleVo).then(response => {
        this.$message.success(response.message || '分配角色成功')
        this.dialogRoleVisible = false
        this.fetchData(this.page)
      })
    },
    // 列表
    fetchData(page = 1) {
      this.page = page
      userApi.getPageList(this.page, this.limit, this.searchObj)
        .then(response => {
          this.datalist = response.data.data.records
          this.total = response.data.data.total
        })
    },
    // 添加或者修改方法
    saveOrUpdate() {
      if (!this.sysUser.id) {
        this.save()
      } else {
        this.update()
      }
    },
    // 删除
    removeDataById(id) {
      this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 调用方法删除
        userApi.removeId(id).then(response => {
          // 提示
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
          // 刷新
          this.fetchData()
        })
      }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })         
      })
    },
    // 根据id查询，数据回显
    edit(id) {
      // 弹出框
      this.dialogVisible = true
      // 调用接口查询
      userApi.getUserById(id)
        .then(response => {
          this.sysUser = response.data.data
        })
    },
    // 修改
    update() {
      userApi.updateUser(this.sysUser)
        .then(response => {
          // 提示
          this.$message.success('操作成功')
          // 关闭弹框
          this.dialogVisible = false
          // 刷新
          this.fetchData()
        })
    },
    // 添加
    save() {
      userApi.addUser(this.sysUser)
        .then(response => {
          // 提示
          this.$message.success('操作成功')
          // 关闭弹框
          this.dialogVisible = false
          // 刷新
          this.fetchData()
        })
    },
    // 添加弹框的方法
    add() {
      this.dialogVisible = true
      this.sysUser = {}
    },
  }
}
</script>

<style scoped>
.search-div {
  padding-bottom: 5px;
  border-bottom: 2px solid #e6e6e6;
}

.table {
  margin-top: 10px;
}
</style>