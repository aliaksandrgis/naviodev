<script setup>
import { heroTags } from "../content/hero";
</script>

<template>
  <section id="top" class="section hero fade-in">
    <div class="hero-grid">
      <div class="headline">
        <p class="badge">GIS / Data / Apps</p>
        <h1>GIS / Data / Apps Development</h1>
        <p class="lede">Showcase studio for geospatial solutions, data pipelines, and modern applications.</p>
        <div class="actions">
          <a class="button primary" href="#projects">View Projects</a>
          <a class="button ghost" href="#contact">Contact</a>
        </div>
        <div class="tags">
          <span v-for="tag in heroTags" :key="tag" class="pill">{{ tag }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  align-items: stretch;
}

.headline h1 {
  margin: 10px 0;
  font-size: 40px;
  line-height: 1.1;
  letter-spacing: -1px;
}

.lede {
  margin: 0 0 18px;
  color: var(--muted);
  font-size: 18px;
  max-width: 640px;
}

.actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}

.tags {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

@media (max-width: 1024px) {
  .headline h1 {
    font-size: 32px;
  }
}

@media (max-width: 640px) {
  .headline h1 {
    font-size: 28px;
  }
}
</style>

