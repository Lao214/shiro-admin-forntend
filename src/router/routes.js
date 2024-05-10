export const routes = [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import(/* webpackChunkName: "employeesList" */ '@/views/dashboard/index.vue'),
        title: '员工列表',
        icon: 'file-sync',
        key: 'k-1-2',
        children: []
    },
    {
        path: '/main',
        name: 'main',
        component: () => import(/* webpackChunkName: "tabLayout" */ '@/views/main/index.vue'),
        title: '引导页',
        icon: 'file-sync',
        key: 'k-1-1',
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import(/* webpackChunkName: "subGuide" */ '@/views/home/index.vue'),
                title: '二级引导',
                icon: 'file-sync',
                key: 'k-1-1-1'
            }
        ]
    },
    {
        path: '/user',
        name: 'user',
        component: () => import(/* webpackChunkName: "employeesList" */ '@/views/userAndPer/user/index.vue'),
        title: '员工列表',
        icon: 'file-sync',
        key: 'k-1-2',
        children: []
    },
    {
        path: '/role',
        name: 'role',
        component: () => import(/* webpackChunkName: "employeesList" */ '@/views/userAndPer/role/index.vue'),
        title: '员工列表',
        icon: 'file-sync',
        key: 'k-1-2',
        children: []
    },
    {
        path: '/system/assignAuth',
        name: 'assignAuth',
        component: () => import('@/views/userAndPer/role/assignAuth.vue'),
        title: '员工列表',
        icon: 'file-sync',
        key: 'k-1-2',
        children: []
    },
    {
        path: '/per',
        name: 'per',
        component: () => import(/* webpackChunkName: "employeesList" */ '@/views/userAndPer/per/index.vue'),
        title: '员工列表',
        icon: 'file-sync',
        key: 'k-1-2',
        children: []
    }
]