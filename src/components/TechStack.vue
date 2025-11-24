<script setup>
import { techStack } from "../content/techStack";
</script>

<template>
  <section id="tech" class="section fade-up">
    <div class="section-header">
      <div>
        <p class="badge">Tech Stack</p>
        <h2 class="section-title">Tools and platforms</h2>
      </div>
      <p class="section-subtitle">Choose the right stack for the product and constraints</p>
    </div>
    <div class="cloud">
      <div class="group">
        <p class="group-title">Core</p>
        <div class="tags">
          <span v-for="item in techStack.primary" :key="item" class="pill">{{ item }}</span>
        </div>
      </div>
      <div class="group">
        <p class="group-title">Geo</p>
        <div class="tags">
          <span v-for="item in techStack.geo" :key="item" class="pill">{{ item }}</span>
        </div>
      </div>
      <div class="group">
        <p class="group-title">Ops & Data</p>
        <div class="tags">
          <span v-for="item in techStack.tooling" :key="item" class="pill">{{ item }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.cloud {
  display: grid;
  gap: 16px;
}

.group-title {
  margin: 0 0 8px;
  color: var(--muted);
  font-size: 14px;
}

.tags {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
</style>
