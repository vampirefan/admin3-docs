<script setup lang="ts">
const route = useRoute()
const mainKey = ref(route.fullPath)
const { page } = useContent()

onActivated(() => {
  mainKey.value = route.fullPath
})
onDeactivated(() => {
  mainKey.value = ' '
})
</script>

<template>
  <div>
    <h1 class="my-10 text-4xl font-bold">
      {{ page?.title }}
      <div class="ml inline-block vertical-bottom">
        <img v-if="page.image" :src="page.image" class="el-icon">
        <i v-else-if="page.icon" :class="`el-icon ${page.icon}`" />
      </div>
    </h1>
    <ContentDoc />
    <el-backtop />
  </div>
</template>
