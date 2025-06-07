<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToBrowseJobs = () => {
  router.push('/jobs'); // Correto: leva para a lista de jobs
};

const goToAddJob = () => {
  router.push('/jobs/add'); // Correto: leva para o formulário de adicionar job
};
</script>

<template>
  <div class="container">
    <div class="card developers-card">
      <h2>For Developers</h2>
      <p>Browse our Vue jobs and start your career today</p>
      <button class="btn browse-btn" @click="goToBrowseJobs">Browse Jobs</button>
    </div>

    <div class="card employers-card">
      <h2>For Employers</h2>
      <p>List your job to find the perfect developer for the role</p>
      <button class="btn add-btn" @click="goToAddJob">Add Job</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
}

.card {
  flex: 1 1 300px;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgb(0 0 0 / 0.1);
  font-family: Arial, sans-serif;
}

.developers-card {
  background-color: #f8f8f8;
  color: #222;
}

.employers-card {
  background: linear-gradient(135deg, #d3f8d3, #b7eeb7);
  color: #0a580a;
}

.card h2 {
  margin-top: 0;
  font-weight: bold;
}

.card p {
  margin: 0.75rem 0 1.25rem;
  font-size: 0.9rem;
  line-height: 1.4;
}

.btn {
  cursor: pointer;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.9rem;
}

.browse-btn {
  background-color: #000;
  color: #fff;
}

.add-btn {
  background-color: #44bb44;
  color: #fff;
}
</style>
