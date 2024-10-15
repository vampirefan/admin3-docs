<script setup lang="ts">
defineProps({
  src: {
    type: String,
    default: '',
  },
  alt: {
    type: String,
    default: '',
  },
  width: {
    type: [String, Number],
    default: undefined,
  },
  height: {
    type: [String, Number],
    default: undefined,
  },
})
</script>

<template>
  <el-image v-bind="$attrs" :src="src" :alt="alt" :style="`width:${width}; height:${height}`" :preview-src-list="[src]" />
</template>

<style scoped>
img {
  margin: 0.25rem
}
</style>
