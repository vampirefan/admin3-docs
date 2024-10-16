<script setup lang="ts">
const props = defineProps({
  /**
   * 图标名称
   * - 使用 'svg-' 引入 Svg 图标
   * - 使用 'i-' 引入 iconify 图标
   */
  name: {
    type: String,
    default: 'i-ep-element-plus',
  },
  filled: {
    type: Boolean,
    default: false,
    required: false,
  },
})
const svgIcon: Record<string, any> = ref('')

onMounted(async () => {
  if (props.name.startsWith('svg-')) {
    const svgName = props.name.substring(4)
    try {
      const iconsImport = import.meta.glob('assets/svg/**/**.svg', { query: '?raw', import: 'default', eager: false })
      const rawIcon = await iconsImport[`/assets/svg/${svgName}.svg`]()
      svgIcon.value = rawIcon
    }
    catch {
      console.error(`[svg-icons] Icon '${svgName}' doesn't exist in 'assets/icons'`)
    }
  }
})
</script>

<template>
  <i v-if="name.startsWith('i-')" class="el-icon" :class="name" />
  <i v-else class="el-icon svg-icon" :class="{ 'svg-icon--fill': !filled }" v-html="svgIcon" />
</template>

<style>
.svg-icon.svg-icon--fill,
.svg-icon.svg-icon--fill * {
  fill: currentColor !important;
}

.svg-icon {
  font-size: 1.5rem !important;
}
</style>
