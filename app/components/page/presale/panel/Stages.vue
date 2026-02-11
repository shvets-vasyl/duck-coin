<template>
  <div class="stages-box base-card">
    <div class="stages-top">
      <div class="stage body-m">Stage 1 ${{ stagesPrice[0]?.text }}</div>
      <div class="stage-line" />

      <div class="current-stage">
        <p class="body-m stage-text">
          Stage {{ selectedStageNumber }} (Current):
        </p>

        <p class="stage-text2 sub-s">1 $dUCK=$</p>

        <div class="select-wrap">
          <CommonSelect v-model="selectedProxy" :items="stagesPrice" inner />
        </div>
      </div>

      <div class="stage-line" />
      <div class="listing body-m">Listing ${{ listingPrice }}</div>
    </div>

    <div class="stages-bot">
      <div class="amount">
        <p class="amount-title sub-s">Your amount</p>

        <div class="calc-field">
          <input
            v-model="amountProxy"
            class="calc-input body-xl"
            name="amount"
            type="text"
            placeholder="0"
            inputmode="numeric"
            @input="onInput"
          />

          <div class="icon-dollar">
            <IconDollar />
          </div>
        </div>
      </div>

      <div class="decor-down">
        <CommonButtonTemplate small disabled>
          <IconDown class="icon-down" />
        </CommonButtonTemplate>
      </div>

      <div class="receive">
        <p class="receive-title sub-s">You receive</p>

        <div class="calc-field receive-field">
          <input
            class="calc-input body-xl"
            name="receive"
            type="text"
            placeholder="0"
            :value="receiveDisplay"
            readonly
          />

          <div class="icon-dollar">
            <IconDollar />
          </div>
        </div>
      </div>

      <button class="join-btn" type="button" @click="$emit('join')">
        <CommonButtonTemplate yellow big> Join now </CommonButtonTemplate>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
type SelectItem = { text: string }

const props = defineProps<{
  stagesPrice: SelectItem[]
  listingPrice: string
  selected: SelectItem
  amount: string
  receiveDisplay: string
}>()

const emit = defineEmits<{
  (e: "update:selected", v: SelectItem): void
  (e: "update:amount", v: string): void
  (e: "join"): void
}>()

const selectedProxy = computed<SelectItem>({
  get: () => props.selected,
  set: (v) => emit("update:selected", v),
})

const amountProxy = computed<string>({
  get: () => props.amount,
  set: (v) => emit("update:amount", v),
})

function onInput(e: Event) {
  const el = e.target as HTMLInputElement

  let v = el.value.replace(/[^\d]/g, "")
  v = v.replace(/^0+(?=\d)/, "")

  emit("update:amount", v)
}

const selectedStageNumber = computed(() => {
  const i = props.stagesPrice.findIndex((s) => s.text === props.selected?.text)
  return i === -1 ? 1 : i + 1
})
</script>

<style scoped lang="scss">
.stages-box {
  @include mobile {
    padding: 1.5rem 1rem;
  }
}
.current-stage {
  display: flex;
  align-items: center;
  width: 30rem;
  justify-content: center;
  border-radius: 3.125rem;
  border: 0.0938rem solid var(--c-black);
  background: var(--c-grey-3);
  padding: 0.875rem;
  @include mobile {
    width: 100%;
  }
}
.stage-text {
  margin-right: 0.5rem;
  @include mobile {
    font-size: 0.75rem;
    margin-right: 0.25rem;
  }
}
.stage-text2 {
  @include mobile {
    font-size: 0.75rem;
  }
}
.select-wrap:deep(.select-text) {
  @include mobile {
    font-size: 0.75rem;
  }
}
.stages-top {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding-bottom: 2.5rem;
  border-bottom: 0.125rem solid var(--c-grey-3);
  @include mobile {
    flex-direction: column;
    gap: 0.5rem;
    padding-bottom: 1.5rem;
  }
}
.stage-line {
  flex: 1 1 auto;
  height: 0.125rem;
  background: #bcbcbc;
  @include mobile {
    height: 1rem;
    width: 0.125rem;
    background: var(--c-black);
  }
}
.stage {
  color: var(--c-grey);
}
.stage,
.listing {
  width: 9.75rem;
  border-radius: 0.75rem;
  border: 0.0938rem solid var(--c-grey-3);
  background: var(--c-milk);
  text-align: center;
  padding: 0.4375rem 0;
  @include mobile {
    font-size: 0.75rem;
    width: auto;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
}

.listing {
  background: var(--c-grey-3);
}

.amount-title,
.receive-title {
  margin-bottom: 1rem;
  @include mobile {
    margin-bottom: 0.75rem;
  }
}

.icon-dollar {
  width: 1.5rem;
  flex: 0 0 1.5rem;
  margin-right: 1rem;
  @include mobile {
    width: 1.25rem;
    flex: 0 0 1.25rem;
  }
}
.calc-field {
  height: 4rem;
  margin-bottom: 0;
  @include mobile {
    height: 3.5rem;
  }
}
.receive-field {
  background: var(--c-milk);
}
.stages-bot {
  padding-top: 2.5rem;
  display: flex;
  align-items: flex-end;
  gap: 1.5rem;
  @include mobile {
    display: flex;
    flex-wrap: wrap;
    gap: 0;
    padding-top: 1.5rem;
    justify-content: space-between;
  }
}
.icon-down {
  width: 1.5rem;
  transform: rotate(-90deg);
}
.decor-down {
  margin-bottom: 0.5rem;
  @include mobile {
    display: none;
  }
}
.join-btn {
  width: 16.625rem;
  margin-bottom: 0.25rem;
  margin-left: auto;
  @include mobile {
    margin-left: 0;
    margin-bottom: 0;
    width: 100%;
    margin-top: 2.5rem;
  }
}
.amount,
.receive {
  @include mobile {
    width: 9.4375rem;
  }
}
</style>
