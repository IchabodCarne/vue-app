import type { RouteRecordRaw } from 'vue-router'
// 布局组件
import Layout from '@/layout/home.vue'
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
routes.push(layoutRouter)

// 页面组件路由定义
Object.entries(views).forEach(([file, component]) => {
  // @ts-ignore
  const path = file.split('/').pop().slice(0, -4)
  if (path.toLowerCase() === 'login') {
    routes.push({
      path: '/login',
      name: 'login',
      component
    })
  } else {
    layoutRouter.children.push({
      path: `/${path.toLowerCase()}`,
      component: component
    })
  }
})

export default routes
