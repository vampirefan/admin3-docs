<script setup lang="ts">
defineProps({
  image: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: '',
  },
  link: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
})
function handleClickLink(link: string) {
  if (link.startsWith('http'))
    return openUrl(link)
  else
    return navigateTo(link)
}
</script>

<template>
  <div class="inline-block w[130px] mx1 my1">
    <el-tooltip :content="title">
      <el-card
        shadow="hover" class="cursor-pointer hover:transform hover:-translate-y-2 duration-300 text-center"
        @click="handleClickLink(link)"
      >
        <div>
          <AdminIcon v-if="icon" :name="icon" class="text-2xl el-icon" />
          <img v-if="image" :src="image" class="w-8 h-8 m-0 m-auto">
        </div>
        <div class="text-sm mt1">
          {{ title }}
        </div>
      </el-card>
    </el-tooltip>
  </div>
</template>

<style scoped>
:deep(.el-card__body){
padding:15px;
}
</style>
