<script setup lang="ts">
const color = useColorMode()
function toggleDark() {
  color.value = color.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <el-link :underline="false" @click="toggleDark">
    <AdminIcon v-if="color === 'dark'" name="i-twemoji-last-quarter-moon-face" />
    <AdminIcon v-else name="i-twemoji-sun" />
  </el-link>
</template>
