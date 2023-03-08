import { createFetch } from '@vueuse/core'
import type { MaybeComputedRef } from '@vueuse/core'
import { ElLoading } from 'element-plus'

const loadingInstance = ElLoading.service({
  fullscreen: true,
  lock: true,
  text: 'Loading',
  background: 'rgba(0, 0, 0, 0.5)'
})

const customizedFetch = createFetch({
  baseUrl: '',
  options: {
    timeout: 15000,
    beforeFetch({ options }) {
      return { options }
    },
    afterFetch({ data, response }) {
      return { data, response }
    }
  },
  fetchOptions: {
    mode: 'cors',
    credentials: 'include' // 请求时携带 cookie 值
  }
})

export const post = async (url: string | MaybeComputedRef<string>, params?: any) => {
  const { data } = await customizedFetch(url, {
    body: JSON.stringify(params)
  })
    .post()
    .json()

  loadingInstance.close()

  return data.value
}
