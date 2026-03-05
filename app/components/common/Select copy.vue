<template>
  <div ref="rootRef" class="select" :class="{ inner, inner2 }">
    <button type="button" class="select-btn" @click="toggle">
      <img
        v-if="modelValue.icon"
        class="select-icon"
        :src="modelValue.icon"
        :alt="modelValue.text"
      />
      <span v-if="!inner2" class="select-text sub-s">
        {{ modelValue.text }}
      </span>
      <span class="select-arrow" :class="{ open: isOpen }">
        <IconCaret />
      </span>
    </button>

    <div v-if="isOpen" class="select-dropdown" data-lenis-prevent>
      <div v-if="searchable" class="select-search">
        <IconSearch class="search-icon" />
        <input
          v-model="searchQuery"
          type="text"
          class="search-input body-m"
          placeholder="Search"
        />
      </div>

      <button
        v-for="item in filteredItems"
        :key="item.text"
        type="button"
        class="select-item"
        :class="{ active: item.text === modelValue.text }"
        @click="pick(item)"
      >
        <img
          v-if="item.icon"
          class="select-icon"
          :src="item.icon"
          :alt="item.text"
        />
        <span class="select-text sub-s">{{ item.text }}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
export type ExchangeItem = {
  text: string
  icon?: string
}

const props = defineProps<{
  items: ExchangeItem[]
  modelValue: ExchangeItem
  inner?: boolean
  inner2?: boolean
  searchable?: boolean
}>()

const emit = defineEmits<{
  (e: "update:modelValue", v: ExchangeItem): void
}>()

const isOpen = ref(false)
const rootRef = ref<HTMLElement | null>(null)
const searchQuery = ref("")

const filteredItems = computed(() => {
  if (!props.searchable || !searchQuery.value.trim()) return props.items

  const query = searchQuery.value.trim().toLowerCase()

  return props.items.filter((item) => item.text.toLowerCase().includes(query))
})

function toggle() {
  isOpen.value = !isOpen.value

  if (!isOpen.value) {
    searchQuery.value = ""
  }
}

function close() {
  isOpen.value = false
  searchQuery.value = ""
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
.select.inner .select-btn,
.select.inner2 .select-btn {
  width: auto;
  height: auto;
  border-radius: 0;
  border: none;
  background: none;
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
  right: 0;
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
.select.inner .select-dropdown,
.select.inner2 .select-dropdown {
  width: auto;
}

.select-search {
  padding: 1rem;
  border-bottom: 0.0625rem solid var(--c-grey-3);
  display: flex;
  align-items: center;
}
.search-icon {
  width: 1.5rem;
}

.search-input {
  width: 100%;
  padding-left: 1rem;
}

.select-item {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  transition: background 0.15s ease;
  box-sizing: border-box;
  text-transform: uppercase;
}
.select-item:not(:last-child) {
  border-bottom: 0.0625rem solid var(--c-grey-3);
}

.select-item:hover,
.select-item.active {
  background: var(--c-grey-3);
}
</style>
