<script setup lang="ts">
const props = defineProps({
  /**
   * @values details, tip, warning, danger
   */
  type: {
    type: String,
    default: 'tip',
    validator(value: string) {
      return ['tip', 'warning', 'danger', 'details'].includes(value)
    },
  },
  title: {
    type: String,
    default: null,
  },
})
const titleText = computed(() => {
  if (props.title) {
    return props.title
  }
  else {
    switch (props.type) {
      case 'warning': return '注意'
      case 'danger': return '警告'
      case 'details': return '详细信息'
      case 'tip':
      default:
        return '提示'
    }
  }
})
</script>

<template>
  <div>
    <details v-if="props.type === 'details'" class="alert" :class="[type]">
      <ContentSlot :use="$slots.default" />
    </details>
    <div v-else class="alert" :class="[type]">
      <p class="alert-title">
        {{ titleText }}
      </p>
      <ContentSlot :use="$slots.default" />
    </div>
  </div>
</template>

<style scoped>
.alert {
  transition: color var(--t-color), border-color var(--t-color), background-color var(--t-color);
}

.alert .alert-title {
  font-weight: 600
}

.alert .alert-title:not(:only-child) {
  margin-bottom: -.4rem
}

.alert.tip,
.alert.warning,
.alert.danger {
  padding: 1.2rem;
  border-left-width: .5rem;
  border-left-style: solid;
  margin: 1rem 0
}

.alert.tip {
  border-color: var(--doc-tip);
  background-color: var(--doc-tip-bg);
  color: var(--doc-tip-text)
}

.alert.tip .alert-title {
  color: var(--doc-tip-title)
}

.alert.tip a {
  color: var(--doc-tip-text-accent)
}

.alert.warning {
  border-color: var(--doc-warning);
  background-color: var(--doc-warning-bg);
  color: var(--doc-warning-text)
}

.alert.warning .alert-title {
  color: var(--doc-warning-title)
}

.alert.warning a {
  color: var(--doc-warning-text-accent)
}

.alert.danger {
  border-color: var(--doc-danger);
  background-color: var(--doc-danger-bg);
  color: var(--doc-danger-text)
}

.alert.danger .alert-title {
  color: var(--doc-danger-title)
}

.alert.danger a {
  color: var(--doc-danger-text-accent)
}

.alert.details {
  display: block;
  position: relative;
  border-radius: 2px;
  margin: 1.6em 0;
  padding: 1.6em;
  background-color: var(--doc-details-bg)
}

.alert.details :deep(h4) {
  margin-top: 0
}

.alert.details :deep(figure):last-child,
.alert.details :deep(p):last-child {
  margin-bottom: 0;
  padding-bottom: 0
}

.alert.details :deep(summary) {
  outline: none;
  cursor: pointer
}
</style>
