<template>
  <section class="hero">
    <div class="content">
      <div class="left">
        <h2 class="title h2">EARLY BIRDS EAT. LATE FADERS CRY.</h2>
        <p class="descr sub-l">Secure your spot before normies arrive.</p>
      </div>
      <div class="right">
        <form class="base-card form">
          <h3 class="form-title h3">Whitelist is Live</h3>

          <div class="vip">
            <p class="sub-m">VIP presale access</p>
            <p class="sub-m">+</p>
            <p class="vip-best sub-m">Best Token Price</p>
          </div>

          <div class="fields">
            <div class="field-wrap">
              <label for="">Name</label>
              <div class="field">
                <input type="text" />
              </div>
            </div>
            <div class="field-wrap">
              <label for="">Email</label>
              <div class="field">
                <input type="text" />
              </div>
            </div>
          </div>

          <button class="form-btn">
            <CommonButtonTemplate big yellow>
              Join Whitelist
            </CommonButtonTemplate>
          </button>

          <div class="text-wrap">
            <div class="form-text body-s">No spam. No data selling. Ever.</div>
          </div>
        </form>
      </div>
    </div>

    <img
      class="duck-img"
      draggable="false"
      src="/images/whitelist/whitelist-duck.png"
    />
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.hero {
  background: var(--c-yellow);
  padding: 8.5625rem 3.5rem 3.5rem;
  position: relative;
}
.content {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 34rem;
  gap: 3.5rem;
}
.title {
  margin-bottom: 1rem;
}
.duck-img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 52rem;
  pointer-events: none;
}
.form {
  height: 40rem;
  border-color: var(--c-black);
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
}
.form-title {
  text-align: center;
  margin-bottom: 0.5rem;
}
.vip {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  margin-bottom: 3.5rem;
}
.vip-best {
  background: var(--c-yellow);
  border-radius: 3.125rem;
  padding: 0.25rem 0.75rem;
}
.form-btn {
  width: 100%;
  margin-bottom: 2.5rem;
}
.fields {
  margin-bottom: 3.5rem;
}
.form-text {
  border-radius: 0.75rem;
  border: 0.1875rem solid var(--c-grey-3);
  background: var(--c-milk);
  padding: 0.5rem 1.5rem;
  display: inline-flex;
  transform: rotate(2deg);
  justify-self: center;
}
.text-wrap {
  display: inline-flex;
  justify-content: center;
}
</style>
