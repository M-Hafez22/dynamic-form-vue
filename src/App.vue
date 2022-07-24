<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useThemeStore } from "./stores/theme";
import ToggleTheme from "./components/ToggleTheme.vue";
const store = useThemeStore();
</script>

<template>
  <div :class="[store.theme, 'app']">
    <header>
      <nav class="links">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/result">Result</RouterLink>
      </nav>
    </header>
    <RouterView />
    <ToggleTheme />
  </div>
</template>
