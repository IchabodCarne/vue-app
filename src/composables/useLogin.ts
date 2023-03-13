import { signIn } from '@/apis/loginApi'
import { reactive } from 'vue'

export const useLogin = () => {
  const loginModule = reactive({
    userName: '',
    password: ''
  })
  const login = async () => {
    await signIn()
  }

  return {
    loginModule,
    login
  }
}
