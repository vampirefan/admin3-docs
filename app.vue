<script setup lang="ts">
const route = useRoute()
const mainKey = ref(route.fullPath)
onActivated(() => {
  mainKey.value = route.fullPath
})
onDeactivated(() => {
  mainKey.value = ''
})
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <Sidebar />
    <Toc />
    <section class="content mx-30">
      <NuxtPage :transition="{ name: 'slide', mode: 'out-in', appear: true }" />
    </section>
  </div>
</template>

<style>
.slide-enter-active,
.fade-enter-active,
.blur-enter-active,
.scale-enter-active {
  transition: all var(--t-transform);
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(-50px);
}

.fade-enter-from {
  opacity: 0;
}

.blur-enter-from {
  opacity: 0;
  filter: blur(0.5rem);
}

.scale-enter-from {
  opacity: 0;
  transform: scale(0.9);
}

.content {
  padding-top: var(--doc-navbar-height);
  padding-left: var(--doc-sidebar-width);
  padding-right: var(--doc-sidebar-width);
  padding-bottom: 2rem;
  display: block;
}

.content :deep(a):hover {
  text-decoration: underline;
}

.content :deep(img) {
  max-width: 100%;
}

.content :deep(h1),
.content :deep(h2),
.content :deep(h3),
.content :deep(h4),
.content :deep(h5),
.content :deep(h6) {
  margin-top: calc(0.5rem - var(--doc-navbar-height));
  padding-top: calc(1rem + var(--doc-navbar-height));
  margin-bottom: 0;
}

.content :deep(h1):first-child,
.content :deep(h2):first-child,
.content :deep(h3):first-child,
.content :deep(h4):first-child,
.content :deep(h5):first-child,
.content :deep(h6):first-child {
  margin-bottom: 1rem
}

.content :deep(h1):first-child+p,
.content :deep(h1):first-child+pre,
.content :deep(h1):first-child+.custom-container,
.content :deep(h2):first-child+p,
.content :deep(h2):first-child+pre,
.content :deep(h2):first-child+.custom-container,
.content :deep(h3):first-child+p,
.content :deep(h3):first-child+pre,
.content :deep(h3):first-child+.custom-container,
.content :deep(h4):first-child+p,
.content :deep(h4):first-child+pre,
.content :deep(h4):first-child+.custom-container,
.content :deep(h5):first-child+p,
.content :deep(h5):first-child+pre,
.content :deep(h5):first-child+.custom-container,
.content :deep(h6):first-child+p,
.content :deep(h6):first-child+pre,
.content :deep(h6):first-child+.custom-container {
  margin-top: 2rem
}
</style>
