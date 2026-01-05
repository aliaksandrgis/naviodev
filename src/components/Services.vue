<script setup>
import { services } from "../content/services";
</script>

<template>
  <section id="services" class="section fade-up">
    <div class="section-header">
      <div>
        <p class="badge">Services</p>
        <h2 class="section-title">Focus areas</h2>
      </div>
      <p class="section-subtitle">Design, delivery, and long-term support</p>
    </div>
    <div class="cards">
      <article v-for="service in services" :key="service.title" class="card service">
        <h3>{{ service.title }}</h3>
        <p class="muted">{{ service.description }}</p>
        <ul>
          <li v-for="point in service.points" :key="point">{{ point }}</li>
        </ul>
      </article>
    </div>
  </section>
</template>

<style scoped lang="scss">
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 14px;
}

.service h3 {
  margin: 0 0 8px;
}

.service ul {
  list-style: none;
  padding-left: 0;
  margin: 12px 0 0;
  padding: 0;
  display: grid;
  gap: 6px;
}

.service li {
  position: relative;
  padding-left: 18px;
  color: var(--muted);
  font-size: 14px;
}

.service li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.55em;
  transform: translateY(-50%);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
  opacity: 0.7;
}
</style>

