<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const goBack = () => router.push('/jobs');
</script>

<template>
  <button @click="goBack" class="back-button">← Back to Job Listings</button>
</template>

<style scoped>
.back-button {
  background: none;
  border: none;
  color: #22c55e;
  font-weight: 500;
  font-size: 0.95rem;
  cursor: pointer;
  margin-bottom: 1.5rem;
}
.back-button:hover {
  text-decoration: underline;
}
</style>
