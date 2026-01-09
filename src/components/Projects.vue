<script setup>
import { projects } from "../content/projects";
</script>

<template>
  <section id="projects" class="section fade-up">
    <div class="section-header">
      <div>
        <p class="badge">Projects</p>
        <h2 class="section-title">Recent work</h2>
      </div>
    </div>
    <div class="cards">
      <article v-for="project in projects" :key="project.name" class="card project">
        <div class="project-head">
          <div>
            <h3>{{ project.name }}</h3>
            <p class="muted">{{ project.description }}</p>
          </div>
          <div v-if="project.links" class="links">
            <a v-if="project.links.demo" :href="project.links.demo" class="pill demo-link">Demo</a>
            <a v-if="project.links.github" :href="project.links.github" class="pill">GitHub</a>
          </div>
        </div>
        <div v-if="project.stack?.length" class="stack">
          <span v-for="tech in project.stack" :key="tech" class="pill">{{ tech }}</span>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped lang="scss">
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 14px;
}

.project-head {
  display: flex;
  justify-content: space-between;
  gap: 12px;
}

h3 {
  margin: 0 0 6px;
}

.links {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.demo-link:hover {
  border-color: var(--accent);
  color: var(--accent);
  background: rgba(36, 199, 217, 0.12);
}

.stack {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 12px;
}

@media (max-width: 640px) {
  .project-head {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
