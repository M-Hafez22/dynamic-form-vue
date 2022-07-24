<script setup>
import { useThemeStore } from "../stores/theme";

const store = useThemeStore();
</script>

<template>
  <div class="theme-btns">
    <input
      :class="store.theme"
      type="radio"
      id="Dark"
      name="Dark"
      label="Dark"
      :checked="store.theme === 'dark'"
      @click="store.toggleTheme('dark')"
    />
    <input
      :class="store.theme"
      type="radio"
      id="Light"
      label="Light"
      name="Light"
      :checked="store.theme === 'light'"
      @click="store.toggleTheme('light')"
    />
  </div>
</template>
