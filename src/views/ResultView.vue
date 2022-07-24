<script setup>
import { useFormStore } from "../stores/form";

const store = useFormStore();
</script>

<template>
  <div class="Result">
    <h1>Your Form Input</h1>
        <div v-for="item in store.form" :key="item.name">
      <p>{{item.name}}: <span>{{item.value}}</span></p>
    </div>
  </div>
</template>

