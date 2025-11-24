<script setup>
import { aboutCards, aboutText } from "../content/about";
</script>

<template>
  <section id="about" class="section fade-up">
    <div class="section-header">
      <div>
        <p class="badge">About</p>
        <h2 class="section-title">NavioDev — engineering studio</h2>
      </div>
      <p class="section-subtitle">Geo, Data, Backend, Web, Mobile — end to end</p>
    </div>
    <p class="about-text">{{ aboutText }}</p>
    <div class="cards">
      <div v-for="card in aboutCards" :key="card.title" class="card about-card">
        <div class="label">{{ card.title }}</div>
        <div class="value">{{ card.value }}</div>
        <p class="muted">{{ card.description }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.about-text {
  color: var(--muted);
  font-size: 17px;
  max-width: 800px;
  margin: 0 0 18px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 12px;
}

.about-card {
  min-height: 150px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.label {
  color: var(--muted);
  font-size: 14px;
}

.value {
  font-size: 20px;
  font-weight: 700;
}
</style>
