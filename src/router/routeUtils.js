export function generateRoutes(permissions) {

    // 根据permissions数组生成路由配置
    // 这只是一个示例逻辑，实际应根据你的权限数据结构来调整
    const routes = [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: () => import(/* webpackChunkName: "employeesList" */ '@/views/dashboard/index.vue'),
          title: '员工列表',
          icon: 'file-sync',
          key: 'k-1-2',
          children: []
      },
    //   {
    //       path: '/uap/per',
    //       name: 'per',
    //       component: () => import( '@/views/userAndPer/per/index.vue'),
    //       title: '员工列表',
    //       icon: 'file-sync',
    //       key: 'k-1-2',
    //       children: []
    //   }
    ]

    permissions.forEach(item => {
        if (item.children) {
            item.children.forEach(itemLevel2 => {
               routes.push(
                {
                    path: item.perPath + '/' + itemLevel2.perPath,
                    name: itemLevel2.perName,
                    component: () => import( '@/views/'+ itemLevel2.component +'.vue'),
                    title: itemLevel2.perName,
                    children: []
                }
               )
            })
        }
    })

    console.log('routeUtils',routes)
    return routes
}