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
  <div class="mx1 my1 inline-block w[130px]">
    <el-tooltip :content="title">
      <el-card
        shadow="hover" class="cursor-pointer text-center duration-300 hover:transform hover:-translate-y-2"
        @click="handleClickLink(link)"
      >
        <div>
          <AdminIcon v-if="icon" :name="icon" class="el-icon text-2xl" />
          <img v-if="image" :src="image" class="m-0 m-auto h-8 w-8">
        </div>
        <div class="mt1 text-sm">
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
