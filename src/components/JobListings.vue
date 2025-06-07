<script setup>
import { reactive, computed, onMounted } from 'vue';
import axios from 'axios';
import JobListing from './jobListing.vue';

const state = reactive({
  jobs: [],
  isLoading: true,
  showAll: false
});

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:8000/jobs');
    state.jobs = response.data;
  } catch (error) {
    console.error('Erro ao buscar os jobs:', error);
  } finally {
    state.isLoading = false;
  }
});

const visibleJobs = computed(() => {
  return state.showAll ? state.jobs : state.jobs.slice(0, 3);
});
</script>

<template>
  <div class="jobs-container">
    <h2 class="jobs-title">Browse Jobs</h2>

    <div v-if="state.isLoading">
      <p style="text-align:center;">Loading jobs...</p>
    </div>

    <div v-else class="job-grid">
      <JobListing
        v-for="job in visibleJobs"
        :key="job.id"
        :job="job"
      />
    </div>

    <div v-if="!state.showAll && !state.isLoading" class="view-all-wrapper">
      <button class="view-all-button" @click="state.showAll = true">View All Jobs</button>
    </div>
  </div>
</template>


<style scoped>
.jobs-container {
  background: linear-gradient(to bottom, #e6e6e6, #dcdcdc);
  padding: 3rem 1rem;
  margin-top: 3rem;
}

.jobs-title {
  text-align: center;
  color: #22c55e;
  font-size: 1.75rem;
  font-weight: bold;
  margin-bottom: 2rem;
}

.job-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  column-gap: 1.5rem;
  row-gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.view-all-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.view-all-button {
  background-color: #000;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 999px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.view-all-button:hover {
  background-color: #333;
}
</style>
