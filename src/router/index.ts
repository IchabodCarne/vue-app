import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/views/Layout.vue'
import Login from '@/views/Login.vue'

const loginRouter: RouteRecordRaw = {
  path: '/login',
  name: 'login',
  component: Login
}

const homeRouter: RouteRecordRaw = {
  path: '/',
  name: 'home',
  component: Layout,
  children: []
}

const routeModule = import.meta.glob('../views/**/*.vue')

for (const path in routeModule) {
  routeModule[path]().then((mod: any) => {
    const routerFile = mod.default
    if (!routerFile.isRouter) return
    homeRouter.children.push({
      path: `/${routerFile.name.toLowerCase()}`,
      name: `${routerFile.name.toLowerCase()}`,
      component: routerFile
    })
  })
}

const routes: RouteRecordRaw[] = [loginRouter, homeRouter]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
