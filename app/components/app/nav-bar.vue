<template>
  <div class="navbar bg-primary text-primary-content">
    <NuxtLink to="/" class="btn btn-ghost text-xl navbar-start">
      Travel Log
    </NuxtLink>
    <div class="navbar-end">
      <AppThemeToggle />
      <a class="btn btn-accent">
        Sign In With GitHub
        <Icon name="tabler:brand-github" size="24" />
      </a>
    </div>
  </div>
</template>
