<script setup>
import { navLinks } from "../content/navigation";
import headerLogo from "../assets/header-logo.png";
</script>

<template>
  <header class="header">
    <a class="brand" href="#top">
      <img class="brand-image" :src="headerLogo" alt="NavioDev logo" />
    </a>
    <nav class="nav">
      <a v-for="link in navLinks" :key="link.to" :href="link.to" class="nav-link">{{ link.label }}</a>
    </nav>
    <a class="cta" href="#contact">Let's talk</a>
  </header>
</template>

<style scoped lang="scss">
.header {
  position: sticky;
  top: 0;
  z-index: 12;
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 12px 16px;
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(12, 20, 36, 0.92), rgba(6, 14, 28, 0.92));
  border: 1px solid rgba(36, 199, 217, 0.12);
  box-shadow: 0 12px 34px rgba(0, 0, 0, 0.38);
  backdrop-filter: blur(12px);
  user-select: none;
}

.brand {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
}

.brand-image {
  height: 52px;
  width: auto;
}

.nav {
  display: inline-flex;
  gap: 18px;
  margin-left: auto;
  margin-right: 8px;
}

.nav-link {
  color: #cbd5e1;
  font-size: 14px;
  padding: 8px 6px;
  border-radius: 10px;
  transition: color 0.2s ease, background 0.2s ease;
}

.nav-link:hover {
  color: var(--accent);
  background: rgba(36, 199, 217, 0.08);
}

.cta {
  padding: 10px 16px;
  border-radius: 10px;
  background: linear-gradient(135deg, #3dd0e0, #24c7d9);
  color: #041018;
  font-weight: 700;
  text-decoration: none;
  box-shadow: 0 14px 30px rgba(36, 199, 217, 0.32);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.cta:hover {
  transform: translateY(-1px);
  box-shadow: 0 16px 36px rgba(36, 199, 217, 0.36);
}

@media (max-width: 900px) {
  .header {
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .nav {
    order: 3;
    width: 100%;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  .cta {
    order: 2;
  }
}

@media (max-width: 640px) {
  .nav {
    gap: 12px;
  }
  .cta {
    width: 100%;
    text-align: center;
  }
}
</style>

