import Vue from 'vue'
import Router from 'vue-router'
/* Layout */
import Layout from '../views/layout/Layout';
/* index */
const index = resolve => require(['../views/index'], resolve);

const create = resolve => require(['../views/create'], resolve);
const restore = resolve => require(['../views/restore'], resolve);
const manage = resolve => require(['../views/manage'], resolve);
const detail = resolve => require(['../views/detail'], resolve);
const up_pwd = resolve => require(['../views/up_pwd'], resolve);
const user = resolve => require(['../views/user'], resolve);
const make = resolve => require(['../views/make'], resolve);
const transfer = resolve => require(['../views/transfer'], resolve);
/* error page */
const Err404 = resolve => require(['../views/error/404'], resolve);

Vue.use(Router)

export const constantRouterMap = [
  { path: '/', component: index, meta: { title: '首页' }, hidden: true },
  {
    path: '/create',
    redirect: '/create',
    component: Layout,
    name: 'create',
    hidden: true,
    children: [{ path: '/create', meta: { requireAuth: true, title: '新建钱包' }, component: create }]
  },
  {
    path: '/restore',
    redirect: '/restore',
    component: Layout,
    name: 'restore',
    hidden: true,
    children: [{ path: '/restore', meta: { requireAuth: false, title: '导入钱包' }, component: restore }]
  },
  {
    path: '/manage',
    redirect: '/manage',
    component: Layout,
    name: 'manage',
    hidden: true,
    children: [{ path: '/manage', meta: { requireAuth: false, title: '管理钱包' }, component: manage }]
  },
  {
    path: '/make',
    redirect: '/make',
    component: Layout,
    name: 'make',
    hidden: true,
    children: [{ path: '/make', meta: { requireAuth: false, title: '收款二维码' }, component: make }]
  },
  {
    path: '/transfer',
    redirect: '/transfer',
    component: Layout,
    name: 'transfer',
    hidden: true,
    children: [{ path: '/transfer', meta: { requireAuth: false, title: '转账' }, component: transfer }]
  },
  {
    path: '/detail',
    redirect: '/detail',
    component: Layout,
    name: 'detail',
    hidden: true,
    children: [{ path: '/detail', meta: { requireAuth: false, title: '钱包详情' }, component: detail }]
  },
  {
    path: '/up_pwd',
    redirect: '/up_pwd',
    component: Layout,
    name: 'up_pwd',
    hidden: true,
    children: [{ path: '/up_pwd', meta: { requireAuth: false, title: '更改密码' }, component: up_pwd }]
  },
  {
    path: '/user',
    redirect: '/user',
    component: Layout,
    name: 'user',
    hidden: true,
    children: [{ path: '/user', meta: { requireAuth: false, title: '个人中心' }, component: user }]
  },
  {
    path: '/404',
    redirect: '/404',
    component: Layout,
    name: 'Err404',
    hidden: true,
    children: [
      { path: '/404', component: Err404, meta: { title: '404' }, name: '404' },
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]
export default new Router({
  mode: 'hash', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
});
