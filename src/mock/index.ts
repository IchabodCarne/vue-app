import type { MockMethod } from 'vite-plugin-mock'

const mocks = import.meta.glob('./**/.ts')

const config: MockMethod[] = []

Object.entries(mocks).forEach(([path, file]) => {
  console.log(path, file)
})

export default config
