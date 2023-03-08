<script lang="ts" setup>
import { post } from '@/utils/request'

onMounted(async () => {
  const data = await post('http://jsonplaceholder.typicode.com/posts')
  console.log('postRes :>> ', data)
})
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
