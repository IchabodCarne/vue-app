import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = []

const routeModule = import.meta.glob('../views/**/*.vue')

for (const path in routeModule) {
  routeModule[path]().then((mod: any) => {
    const file = mod.default
    if (!file.isRouter) return
    // 首字母转小写 letterToLowerCase 首字母转大写 letterToUpperCase
    // router.addRoute({
    //   path: `/${letterToLowerCase(file.name)}`,
    //   name: `${letterToUpperCase(file.name)}`,
    //   component: file
    // })
  })
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
