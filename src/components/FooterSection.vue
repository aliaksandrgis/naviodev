<template>
  <footer class="footer">
    <span>© NavioDev Studio</span>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--muted);
  font-size: 14px;
  padding: 12px 0;
}

.footer a {
  color: var(--accent);
}

@media (max-width: 640px) {
  .footer {
    flex-direction: column;
    gap: 6px;
  }
}
</style>
