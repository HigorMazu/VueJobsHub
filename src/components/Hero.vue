<script setup>
import { defineProps } from 'vue';

defineProps({
    title: {
        type: String,
        default: 'Become a Vue Dev'
    },
    subtitle: {
        type: String,
        default: 'Find the Vue job that fits your skills and needs'
    }
});
</script>

<template>
  <section class="custom-section">
    <div class="container">
      <div class="text-center">
        <h1>{{ title }}</h1>
        <p>{{ subtitle }}</p>
      </div>
    </div>
  </section>
</template>

<style>
.custom-section {
  background-color: #16a34a;
  padding: 5rem 0;
  margin-bottom: 1rem;
  text-align: center;
  color: white;
}
.container {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1rem;
}
h1 {
  font-weight: 800;
  font-size: 2.25rem;
  margin-bottom: 1rem;
}
p {
  font-size: 1.25rem;
}
</style>


