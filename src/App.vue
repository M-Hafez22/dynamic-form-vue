<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="app">
    <header>
      <nav class="links">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/result">Result</RouterLink>
      </nav>
    </header>
    <RouterView />
  </div>
</template>
