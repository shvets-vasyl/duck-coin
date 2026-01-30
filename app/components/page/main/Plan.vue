<template>
  <section class="section plan">
    <h3 class="title h3">The Flight Plan</h3>

    <p class="descr body-m">
      We’re not here to pump and dump. Here’s exactly what we’re building and
      when. Hold us accountable, anon.
    </p>

    <div class="items">
      <div
        v-for="({ title, list }, i) in items"
        :key="i"
        class="item base-card"
      >
        <svg v-if="i === 0" class="top-decor" viewBox="0 0 134 80" fill="none">
          <path
            d="M111.5 0.000126401L5.40391e-06 0.000136149L92.5841 23.5037C98.8706 25.0996 104.244 29.172 107.479 34.7933L133.5 80.0005L133.5 22.0001C133.5 9.84986 123.65 0.000125339 111.5 0.000126401Z"
            fill="#FFFFCD"
          />
        </svg>

        <svg
          v-if="i === 0"
          class="bottom-decor"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 142H147H199L46.5428 118.394C37.1458 116.939 29.494 110.073 27.0329 100.888L0 0V120C0 132.15 9.84973 142 22 142Z"
            fill="#FFFFCD"
          />
        </svg>

        <p class="item-subtitle sub-l">Q{{ i + 1 }} 2026</p>
        <h4 class="item-title h4">{{ title }}</h4>

        <div class="list">
          <div
            v-for="({ checked, text, button }, l) in list"
            :key="l"
            class="list-item"
            :class="{ checked }"
          >
            <div class="list-check">
              <IconCheck2 v-if="checked" />
            </div>
            <div class="list-text">
              <p class="body-l">{{ text }}</p>

              <div v-if="button" class="list-info sub-s">3x completed</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="foot">
      <div class="sub-m">
        <p>This is the plan. Executed by builders, funded by believers.</p>
        <p>Markets might be volatile but our shipping schedule isn’t.</p>
      </div>

      <button class="join-btn">
        <CommonButtonTemplate yellow big>
          Secure Your Position in the Token Sale
        </CommonButtonTemplate>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
const items = [
  {
    title: "Nest Building",
    list: [
      {
        checked: true,
        text: "$DUCK Token Presale Launch",
      },
      {
        checked: true,
        text: "Smart Contract Audits",
        button: true,
      },
      {
        checked: false,
        text: "Community building & early flock assembly",
      },
      {
        checked: false,
        text: "DuckPad MVP development",
      },
      {
        checked: false,
        text: "Ambassador program launch",
      },
    ],
  },
  {
    title: "Taking Flight",
    list: [
      {
        checked: false,
        text: "Token Generation Event (TGE)",
      },
      {
        checked: false,
        text: "CEX & DEX listings (Jupiter, Raydium + more)",
      },
      {
        checked: false,
        text: "DuckPad Beta Launch (private)",
      },
      {
        checked: false,
        text: "First 10 verified launches on DuckPad",
      },
      {
        checked: false,
        text: "Staking platform live",
      },
      {
        checked: false,
        text: "Duck Score v1 release",
      },
    ],
  },
  {
    title: "Full Migration",
    list: [
      {
        checked: false,
        text: "DuckPad Public Launch",
      },
      {
        checked: false,
        text: "Quack Insurance Pool activation",
      },
      {
        checked: false,
        text: "Mobile app release (iOS + Android)",
      },
      {
        checked: false,
        text: "Cross-chain expansion research",
      },
      {
        checked: false,
        text: "30k+ tokens launched milestone",
      },
      {
        checked: false,
        text: "Governance v1 implementation",
      },
    ],
  },
  {
    title: "Duck Dynasty",
    list: [
      {
        checked: false,
        text: "Revenue sharing activation for holders",
      },
      {
        checked: false,
        text: "DuckPad Pro features (institutional)",
      },
      {
        checked: false,
        text: "Multi-chain deployment begins",
      },
      {
        checked: false,
        text: "Major CEX listings push",
      },
      {
        checked: false,
        text: "100k+ tokens launched milestone",
      },
      {
        checked: false,
        text: "DAO transition planning",
      },
    ],
  },
]
</script>

<style scoped lang="scss">
.title {
  margin-bottom: 1rem;
  text-align: center;
}
.descr {
  width: 30rem;
  margin-bottom: 3.5rem;
  text-align: center;
}
.items {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  padding: 0 7rem;
}
.item {
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 2.5rem;
  padding-bottom: 9.4375rem;
}
.top-decor,
.bottom-decor {
  position: absolute;
  pointer-events: none;
}
.top-decor {
  top: 0;
  right: 0;
  width: 9.125rem;
}
.bottom-decor {
  bottom: -0.5rem;
  left: 0;
  width: 12.4375rem;
}
.item:nth-child(1) {
  border: 0.125rem solid var(--c-black);
  background: var(--c-yellow);
}
.item-subtitle {
  margin-bottom: 1rem;
}
.item-title {
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 0.125rem solid var(--c-black);
}
.list-item {
  display: grid;
  grid-template-columns: 1.5rem 1fr;
  gap: 1.5rem;
  position: relative;
}
.list-item:not(:last-child):after {
  content: "";
  position: absolute;
  top: 1.75rem;
  left: 0.6875rem;
  height: calc(100% - 1.75rem);
  width: 0.1875rem;

  background-image: linear-gradient(to bottom, #dadada 33%, transparent 0);
  background-size: 0.125rem 0.625rem;
  background-repeat: repeat-y;
}
.list-item:not(:last-child) {
  padding-bottom: 2rem;
}
.item:nth-child(1) .list-item:after {
  background-image: linear-gradient(to bottom, #baac00 33%, transparent 0);
}
.item:nth-child(1) .list-item:nth-child(1):after {
  background-image: linear-gradient(
    to bottom,
    var(--c-black) 33%,
    transparent 0
  );
}

.list-check {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.125rem solid var(--c-black);
  position: relative;
  top: 0.0625rem;
}
.list-check:deep(svg) {
  width: 0.9375rem;
}
.list-item.checked .list-check {
  background: var(--c-black);
}

.list-item.checked + .list-item + .list-item .list-check {
  border-style: dashed;
}
.list-info {
  border-radius: 3.125rem;
  padding: 0.5rem 1rem;
  background: var(--c-black);
  display: inline-flex;
  color: var(--c-white);
  height: 2.5rem;
  align-items: center;
  justify-content: center;
  margin-top: 0.75rem;
}
.foot {
  margin-top: 3.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  text-align: center;
}
.join-btn {
  width: 25rem;
}
</style>
