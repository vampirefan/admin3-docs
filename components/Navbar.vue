<script setup lang="ts">
import type { Action } from 'element-plus'
import { ElMessageBox } from 'element-plus'

const route = useRoute()
const { navigation } = useContent()
const appConfig = useAppConfig()
const config = ref(useLocalStorage('app-config', appConfig))

const navTree = computed(() => {
  return navigation.value.filter((item: any) => item._path !== '/')
})

onMounted(() => {
  /* 更新版本号 */
  if (config.value.version && config.value.version !== appConfig.version) {
    ElMessageBox.alert(`当前版本：${config.value.version}，发现新版本：${appConfig.version}，请点击确定进行更新！`, '网站更新', {
      callback: (action: Action) => {
        if (action === 'confirm') {
          config.value.version = appConfig.version
          location.reload()
        }
      },
    })
  }
  else {
    config.value.version = appConfig.version
  }
})
</script>

<template>
  <el-menu class="navbar" mode="horizontal" :ellipsis="false" :default-active="route.path">
    <el-link class="text-2xl" :underline="false" type="success" @click="navigateTo('/')">
      <img src="/image/admin3-logo.png" class="mr h9 w9">
      Admin 3
    </el-link>
    <div class="flex-grow" />
    <el-sub-menu v-for="link of navTree" :key="link._path" :index="link._path">
      <template #title>
        <AdminIcon :name="link.icon" />
        <span class="text-lg font-bold">{{ link.title }}</span>
      </template>
      <el-menu-item
        v-for="sublink of link.children" :key="sublink._path" :index="sublink._path"
        @click="navigateTo(sublink._path)"
      >
        {{ sublink.title }}
      </el-menu-item>
    </el-sub-menu>

    <el-tooltip content="项目源码">
      <el-link :underline="false" @click="openUrl('http://10.102.81.50/gitlab/admin3/wiki3')">
        <AdminIcon name="i-logos-gitlab" class="mx-2 text-xl" />
      </el-link>
    </el-tooltip>

    <el-tooltip content="颜色主题">
      <AdminDarkToggle class="mx-2 text-xl" />
    </el-tooltip>
  </el-menu>
</template>

<style scoped>
.navbar {
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  right: 0;
  height: var(--doc-navbar-height);
  box-sizing: border-box;
  border-bottom: 1px solid var(--doc-border);
  background-color: var(--doc-bg-navbar);
  transition: background-color var(--t-color), border-color var(--t-color);
  padding-left: 20px;
  padding-right: 20px;
}
</style>
