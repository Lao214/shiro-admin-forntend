<template>
    <aside>
        <p> Menu </p>
        <span v-for="(item, index) in menus" :key="index"> 
          <i :class="item.perIcon" aria-hidden="true"></i>
            {{ item.perName }}
           <a v-for="(item2, index2) in item.children" @click="rushToPath( item.perPath + '/' + item2.perPath, item2.perName)" :key="index2">
              <i :class="item2.perIcon" aria-hidden="true"></i>
              {{ item2.perName }}
           </a>
        </span>

        <!-- <span>
            <i class="fa fa-user-o" aria-hidden="true"></i>
            用户与权限
            <a @click="rushToPath('user','用户管理')">
                <i class="fa fa-user-o" aria-hidden="true"></i>
                用户管理
            </a>
            <a @click="rushToPath('role','角色管理')">
                <i class="fa fa-user-o" aria-hidden="true"></i>
                角色管理
            </a>
            <a @click="rushToPath('per','权限管理')">
                <i class="fa fa-user-o" aria-hidden="true"></i>
                权限管理
            </a>
        </span> -->
    </aside>
</template>

<script>
export default {
  props: ['menus'],
  data() {
    return {

    }
  },
  methods: {
    rushToPath(gpath,gname) {

      // 获取目标路径，确保以 '/' 开头
      const targetPath = '/' + gpath

      // 检查当前路由的完整路径是否与目标路径相同
      if (this.$route.path === targetPath) {
        // 如果相同，则不执行跳转
        this.$message({
          type: 'info',
          message: `已在 ${gname} 页面`
        })
        return
      }

      this.$router.push({
        path: targetPath
      })
    }
  }
}
</script>

<style scoped>
  aside {
    color: #fff;
    width: 250px;
    padding-left: 20px;
    height: 100vh;
    background-image: linear-gradient(30deg , #0048bd, #44a7fd);
    border-top-right-radius: 80px;
    text-align: left;
  }

aside a {
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  display: block;
  padding: 12px;
  margin: 7px 0;
  padding-left: 30px;
  text-decoration: none;
  -webkit-tap-highlight-color:transparent;
}


aside a:hover {
  color: #3f5efb;
  background: #fff;
  outline: none;
  position: relative;
  background-color: #fff;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  cursor: pointer;
}

aside a i {
  margin-right: 5px;
}

aside a:hover::after {
  content: "";
  position: absolute;
  background-color: transparent;
  bottom: 100%;
  right: 0;
  height: 35px;
  width: 35px;
  border-bottom-right-radius: 18px;
  box-shadow: 0 20px 0 0 #fff;
}

aside a:hover::before {
  content: "";
  position: absolute;
  background-color: transparent;
  top: 38px;
  right: 0;
  height: 35px;
  width: 35px;
  border-top-right-radius: 18px;
  box-shadow: 0 -20px 0 0 #fff;
}

aside p {
  margin: 0;
  padding: 40px 0;
}

body {
  font-family: 'Roboto';
  width: 100%;
  height: 100vh;
  margin: 0;
}

.social {
  height: 0;  
}

.social i:before {
  width: 14px;
  height: 14px;
  font-size: 14px;
  position: fixed;
  color: #fff;
  background: #0077B5;
  padding: 10px;
  border-radius: 50%;
  top:5px;
  right:5px;
}
</style>