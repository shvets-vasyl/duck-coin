<template>
  <section class="info">
    <div class="container">
      <h5 v-if="data.title" class="title h5">{{ data.title }}</h5>
      <div class="descr body-m" v-html="data.descr" />

      <div class="text-block body-m" v-html="data.textBlock" />

      <div class="items">
        <div
          v-for="({ title, descr }, i) in data.items"
          :key="i"
          class="item"
          :class="{ active: currentOpen === i }"
        >
          <div class="item-head" @click="toggleItem(i)">
            <h5 class="item-title h5">{{ title }}</h5>

            <button class="nav-open">
              <CommonButtonTemplate small>
                <div class="link-wrap">
                  <IconCaret2 />
                </div>
              </CommonButtonTemplate>
            </button>
          </div>

          <div ref="itemBody" class="item-body">
            <div class="body-content body-m" v-html="descr" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  data: {
    title: string
    descr: string
    textBlock: string
    items: {
      title: string
      descr: string
    }[]
  }
}>()

const currentOpen = ref(-1)
const itemBody = ref()

const toggleItem = (index: number) => {
  if (currentOpen.value === index) {
    gsap.to(itemBody.value[index], {
      height: "0",
    })

    currentOpen.value = -1

    return
  }

  currentOpen.value = index

  gsap.to(itemBody.value, {
    height: (i) => (index === i ? "auto" : "0"),
  })
}
</script>

<style scoped lang="scss">
.info {
  padding-bottom: 3.5rem;
  @include mobile {
    padding-bottom: 2rem;
  }
}
.container {
  width: 55rem;
  margin: 0 auto;
  @include mobile {
    width: 100%;
    padding: 1.5rem 1rem 0;
  }
}
.title {
  text-transform: capitalize;
  margin-bottom: 1.5rem;
  @include mobile {
    margin-bottom: 1rem;
  }
}
.descr {
  margin-bottom: 3.5rem;
  @include mobile {
    margin-bottom: 2.5rem;
  }
}
.descr:deep(a),
.body-content:deep(a) {
  text-decoration: underline;
}
@include hover {
  .descr:deep(a):hover,
  .body-content:deep(a):hover {
    text-decoration: none;
  }
}
.text-block {
  border-radius: 1.5rem;
  background: var(--c-grey-3);
  padding: 1.5rem;
  margin-bottom: 3.5rem;
  @include mobile {
    padding: 1.25rem;
    margin-bottom: 2.5rem;
  }
}

.link-wrap {
  width: 1.25rem;
  transition: all 0.5s var(--t-ease);
}
.item.active .link-wrap {
  transform: rotate(180deg);
}

.item {
  padding: 2.5rem 0;
  @include mobile {
    padding: 1.5rem 0;
  }
}
.item:not(:last-child) {
  border-bottom: 0.0625rem solid var(--c-black);
}
.item-head {
  display: flex;
  gap: 2.5rem;
  justify-content: space-between;
  align-items: center;
  @include mobile {
    gap: 1rem;
  }
}
.body-content {
  padding-top: 1.5rem;
  @include mobile {
    padding-top: 1.25rem;
  }
}
.item-body {
  overflow: hidden;
  height: 0;
}
</style>
