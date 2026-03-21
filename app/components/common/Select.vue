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

    <!-- DESKTOP -->
    <div v-if="isOpen && !isMobile" class="select-dropdown" data-lenis-prevent>
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
        :key="item.code ?? item.text"
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

  <!-- MOBILE -->
  <Teleport to="body">
    <div v-if="isOpen && isMobile" class="select-mobile" data-lenis-prevent>
      <div class="select-mobile-overlay" @click="close" />

      <div class="select-mobile-modal">
        <div class="select-mobile-head">
          <p v-if="inner2" class="head-title sub-s">Select coin</p>
          <button type="button" class="select-mobile-close" @click="close">
            <IconClose />
          </button>
        </div>

        <div v-if="searchable" class="select-search">
          <IconSearch class="search-icon" />
          <input
            v-model="searchQuery"
            type="text"
            class="search-input body-m"
            placeholder="Search"
          />
        </div>

        <div class="select-mobile-list">
          <button
            v-for="item in filteredItems"
            :key="item.code ?? item.text"
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
    </div>
  </Teleport>
</template>

<script setup lang="ts">
export type ExchangeItem = {
  text: string
  icon?: string
  /** API currency code; used for list keys and search when `text` is a display label */
  code?: string
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
const isMobile = ref(false)

const filteredItems = computed(() => {
  if (!props.searchable || !searchQuery.value.trim()) return props.items

  const query = searchQuery.value.trim().toLowerCase()

  return props.items.filter((item) => {
    const text = item.text.toLowerCase()
    const code = (item.code ?? "").toLowerCase()
    return text.includes(query) || code.includes(query)
  })
})

function updateIsMobile() {
  if (typeof window === "undefined") return
  isMobile.value = window.innerWidth <= 767
}

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
  if (isMobile.value) return

  const el = rootRef.value
  if (!el) return
  if (e.target instanceof Node && !el.contains(e.target)) close()
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === "Escape") close()
}

onMounted(() => {
  updateIsMobile()
  window.addEventListener("resize", updateIsMobile)
  document.addEventListener("click", onDocClick)
  document.addEventListener("keydown", onKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateIsMobile)
  document.removeEventListener("click", onDocClick)
  document.removeEventListener("keydown", onKeydown)
})
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
  flex-shrink: 0;
}

/* стрілка */
.select-arrow {
  width: 0.625rem;
  transform: rotate(180deg);
}
.select-arrow.open {
  transform: rotate(0deg);
}

/* desktop dropdown */
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

/* search */
.select-search {
  padding: 1rem;
  border-bottom: 0.0625rem solid var(--c-grey-3);
  display: flex;
  align-items: center;
  @include mobile {
    border-radius: 1rem;
    border: 0.0938rem solid var(--c-grey-3);
    background: var(--c-milk);
    margin: 1rem;
    padding: 0.5rem 1rem;
  }
}

.select-search:focus-within {
  @include mobile {
    border-color: var(--c-black);
    background: transparent;
  }
}

.search-icon {
  width: 1.5rem;
  flex-shrink: 0;
  @include mobile {
    order: 2;
    width: 1.25rem;
  }
}

.search-input {
  width: 100%;
  padding-left: 1rem;
  background: transparent;
  outline: none;
  border: none;
  @include mobile {
    order: 1;
    padding-left: 0;
  }
}

/* items */
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

/* mobile modal */
:global(.select-mobile) {
  position: fixed;
  inset: 0;
  z-index: var(--z-popup);
}

:global(.select-mobile-overlay) {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
}

:global(.select-mobile-modal) {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: calc(100vh - 3.8125rem);
  background: var(--c-white);
  border-radius: 1rem 1rem 0 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

:global(.select-mobile-head) {
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  border-bottom: 0.0625rem solid var(--c-grey-3);
  @include mobile {
    border-bottom: none;
    padding: 1.5rem 1rem 0.5rem;
    position: relative;
  }
}
.head-title {
  position: absolute;
  top: 1.875rem;
  left: 50%;
  transform: translateX(-50%);
}

:global(.select-mobile-close) {
  text-transform: uppercase;
  width: 1.5rem;
}

:global(.select-mobile-list) {
  flex: 1;
  overflow: auto;
}
</style>
