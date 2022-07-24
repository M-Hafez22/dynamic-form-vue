<script setup>
import { useFormStore } from "../stores/form";

const store = useFormStore();
</script>

<template>
  <main>
    <h1>Form</h1>
    <div v-for="item in store.form" :key="item.name">
      <div class="input">
        <input
          v-if="item.type !== 'file'"
          type="item.type"
          v-model="item.value"
          autoComplete="off"
          required
        />
        <input v-else type="file" />

        <label :style="{ top: item?.value?.length > 0 ? 0 : '' }">
          {{ item.name }}
        </label>
      </div>
    </div>
  </main>
</template>
