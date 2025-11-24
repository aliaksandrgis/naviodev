<script setup>
import HeaderNav from "./components/Header.vue";
import HeroSection from "./components/Hero.vue";
import AboutSection from "./components/About.vue";
import ServicesSection from "./components/Services.vue";
import ProjectsSection from "./components/Projects.vue";
import TechStackSection from "./components/TechStack.vue";
import ContactSection from "./components/Contact.vue";
import FooterSection from "./components/FooterSection.vue";
</script>

<template>
  <div class="page">
    <HeaderNav />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <ProjectsSection />
    <TechStackSection />
    <ContactSection />
    <FooterSection />
  </div>
</template>
