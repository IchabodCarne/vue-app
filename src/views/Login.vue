<script lang="ts" setup>
import { useLogin } from '@/composables/useLogin'

const { loginModule, login } = useLogin()
</script>

<template>
  <div class="login-container">
    <el-form :model="loginModule" class="p-20 bg-white rounded-lg" label-position="right">
      <el-form-item>
        <el-input v-model="loginModule.userName" class="login-input" placeholder="用户名" />
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="loginModule.password"
          class="login-input"
          show-password
          placeholder="密码"
        />
      </el-form-item>
      <el-form-item>
        <el-button class="w-full" type="primary" @click="login">登录</el-button>
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
