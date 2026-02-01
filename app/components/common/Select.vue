<template>
  <div ref="rootRef" class="select">
    <button type="button" class="select-btn" @click="toggle">
      <img class="select-icon" :src="modelValue.icon" :alt="modelValue.text" />
      <span class="select-text sub-s">{{ modelValue.text }}</span>
      <span class="select-arrow" :class="{ open: isOpen }">
        <IconCaret />
      </span>
    </button>

    <div v-if="isOpen" class="select-dropdown">
      <button
        v-for="item in items"
        :key="item.text"
        type="button"
        class="select-item"
        :class="{ active: item.text === modelValue.text }"
        @click="pick(item)"
      >
        <img class="select-icon" :src="item.icon" :alt="item.text" />
        <span class="select-text sub-s">{{ item.text }}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
export type ExchangeItem = {
  text: string
  icon: string
}

defineProps<{
  items: ExchangeItem[]
  modelValue: ExchangeItem
}>()

const emit = defineEmits<{
  (e: "update:modelValue", v: ExchangeItem): void
}>()

const isOpen = ref(false)
const rootRef = ref<HTMLElement | null>(null)

function toggle() {
  isOpen.value = !isOpen.value
}
function close() {
  isOpen.value = false
}
function pick(item: ExchangeItem) {
  emit("update:modelValue", item)
  close()
}
function onDocClick(e: MouseEvent) {
  const el = rootRef.value
  if (!el) return
  if (e.target instanceof Node && !el.contains(e.target)) close()
}

onMounted(() => document.addEventListener("click", onDocClick))
onBeforeUnmount(() => document.removeEventListener("click", onDocClick))
</script>

<style scoped lang="scss">
.select {
  position: relative;
}

/* кнопка */
.select-btn {
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 3.125rem;

  border: 0.0625rem solid var(--c-black);
  background: var(--c-white);
}

.select-icon {
  width: 1.25rem;
}

/* стрілка */
.select-arrow {
  width: 0.625rem;
  transform: rotate(180deg);
}
.select-arrow.open {
  transform: rotate(0deg);
}

/* dropdown */
.select-dropdown {
  position: absolute;
  left: 0;
  top: calc(100% + 0.25rem);
  width: 100%;
  max-height: 25rem;

  border-radius: 1rem;
  border: 0.0938rem solid var(--c-grey-3);
  background: var(--c-white);
  overflow: auto;
  z-index: 20;
  display: flex;
  flex-direction: column;
}

.select-item {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  transition: background 0.15s ease;
  box-sizing: border-box;
}
.select-item:not(:last-child) {
  border-bottom: 0.0625rem solid var(--c-grey-3);
}

.select-item:hover,
.select-item.active {
  background: var(--c-grey-3);
}
</style>
