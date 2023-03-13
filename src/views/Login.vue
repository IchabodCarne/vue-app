<script lang="ts" setup>
import type { FormInstance, FormRules } from 'element-plus'
import { useLogin } from '@/composables/useLogin'

const ruleFormRef = ref<FormInstance>()
const rules = reactive<FormRules>({
  userName: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})
const { loginModule, login } = useLogin()
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate(async (valid) => {
    if (valid) {
      await login()
    }
  })
}
</script>

<template>
  <div class="login-container">
    <el-form
      ref="ruleFormRef"
      :model="loginModule"
      :rules="rules"
      class="p-20 bg-white rounded-lg"
      label-position="right"
      status-icon
    >
      <el-form-item prop="userName">
        <el-input v-model="loginModule.userName" class="login-input" placeholder="用户名" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="loginModule.password"
          class="login-input"
          show-password
          placeholder="密码"
        />
      </el-form-item>
      <el-form-item>
        <el-button class="w-full" type="primary" @click="submitForm(ruleFormRef)">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>
.login-container {
  @apply grid place-content-center w-screen h-screen;
  background-image: linear-gradient(to right, #fbc2eb, #a6c1ee);
}
.login-input {
  width: 200px;
}
</style>
