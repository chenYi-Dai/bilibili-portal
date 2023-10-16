/*import Layout from '@/layouts/index.vue';
import DashboardIcon from '@/assets/assets-slide-dashboard.svg';

export default [
  {
    path: '/dashboard',
    component: Layout,
    redirect: '/dashboard/base/test',
    name: 'dashboard',
    meta: { title: '调用链路', icon: DashboardIcon },
    
    children: [
      // {
      //   path: 'base',
      //   name: 'DashboardBase',
      //   component: () => import('@/pages/dashboard/base/index.vue'),
      //   meta: { title: '概览仪表盘' },
      // },
      // {
      //   path: 'detail',
      //   name: 'DashboardDetail',
      //   component: () => import('@/pages/dashboard/detail/index.vue'),
      //   meta: { title: '统计报表' },
      // },
      {
        path: 'test',
        name: 'testNode',
        component: () => import('@/pages/dashboard/test/testNode.vue'),
        meta: { title: '测试节点' },
      },
    ],
  },
  
];*/
