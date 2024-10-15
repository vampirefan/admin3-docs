<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    default: '',
  },
})
const appConfig = useAppConfig()
const textShow = computed(() => {
  return props.text || appConfig.demoUrl
})
</script>

<template>
  <a :href="appConfig.demoUrl" target="_blank" class="inline hover:underline">
    {{ textShow }}
  </a>
</template>
