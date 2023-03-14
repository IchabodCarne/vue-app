import type { RouteRecordRaw } from 'vue-router'
// 布局组件
import Layout from '@/layout/home.vue'
// 登录页面
import Login from '@/views/login/index.vue'
// 路由配置
const routes: RouteRecordRaw[] = []
// 所有页面组件
const views = import.meta.glob('../views/**/*.vue')

// 布局组件路由定义
const layoutRouter: RouteRecordRaw = {
  path: '/',
  name: 'home',
  component: Layout,
  children: []
}
// 登录页面
const loginRouter: RouteRecordRaw = {
  path: '/login',
  name: 'login',
  component: Login
}
routes.push(layoutRouter, loginRouter)

// 页面组件路由定义
Object.entries(views).forEach(([file, component]) => {
  const filePath = file.split('/')
  // @ts-ignore
  let path = filePath.pop().slice(0, -4)
  if (path === 'index') {
    // 若文件夹下只有一个vue页面，以文件夹名称作为路由path
    path = filePath.at(-2) ?? ''
  }
  if (path && path.toLowerCase() !== 'login') {
    layoutRouter.children.push({
      path: `/${path.toLowerCase()}`,
      component: component
    })
  }
})

export default routes
