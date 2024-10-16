<script setup lang="ts">
const { navigation } = useContent()

const navTree = computed(() => {
  return navigation.value.filter((item: any) => item._path !== '/')
})
const route = useRoute()
</script>

<template>
  <aside class="sidebar">
    <el-menu class="mt" router :ellipsis="false" :default-active="route.path" unique-opened>
      <el-menu-item index="/" @click="navigateTo('/')">
        <Icon name="i-twemoji-house-with-garden" />
        <span class="text-base font-600">介绍</span>
      </el-menu-item>
      <el-sub-menu v-for="link of navTree" :key="link._path" :index="link._path">
        <template #title>
          <Icon :name="link.icon" />
          <span class="text-base font-600">{{ link.title }}</span>
        </template>
        <el-menu-item
          v-for="sublink of link.children" :key="sublink._path" :index="sublink._path"
          @click="navigateTo(sublink._path)"
        >
          <img v-if="sublink.image" :src="sublink.image" class="el-icon">
          <i v-else-if="sublink.icon" :class="`el-icon ${sublink.icon}`" />
          <i v-else class="el-icon i-twemoji-memo" />
          <span>{{ sublink.title }}</span>
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </aside>
</template>

<style scoped>
.sidebar {
  font-size: 16px;
  width: var(--doc-sidebar-width);
  position: fixed;
  z-index: 20;
  margin: 0;
  top: var(--doc-navbar-height);
  left: 0;
  bottom: 0;
  box-sizing: border-box;
  border-right: 1px solid var(--doc-border);
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: var(--doc-brand) var(--doc-border);
  background-color: var(--doc-bg-sidebar);
  transition: transform var(--t-transform), background-color var(--t-color), border-color var(--t-color);
}

.sidebar::-webkit-scrollbar {
  width: 7px;
  height: 7px;
}

.sidebar::-webkit-scrollbar-track {
  background-color: var(--doc-border);
}

.sidebar::-webkit-scrollbar-thumb {
  background-color: var(--doc-brand);
}

.el-menu-item.is-active {
  color: var(--doc-text-accent);
  font-weight: 700;
  border-left: .3rem solid var(--doc-text-accent);
  margin-left: -.3rem;
}

.el-menu-item {
  font-size: 1em;
  color: var(--doc-text);
}

.el-menu {
  border-right: none;
}
</style>
