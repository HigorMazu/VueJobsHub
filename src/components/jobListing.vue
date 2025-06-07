<script setup>
import { RouterView } from 'vue-router'
import { ref } from 'vue'
defineProps({ job: Object })

const expanded = ref(false)

const toggleExpanded = () => {
  expanded.value = !expanded.value
}
</script>

<template>
  <div class="job-card">
    <div>
      <div class="job-type">{{ job.type }}</div>
      <h3 class="job-title">{{ job.title }}</h3>

      <p :class="['job-description', { 'clamp': !expanded }]">
        {{ job.description }}
      </p>

      <button class="toggle-btn" @click="toggleExpanded">
        {{ expanded ? 'Less' : 'More' }}
      </button>

      <div class="job-salary">
        {{ job.salary }} <span class="job-suffix">/ Year</span>
      </div>
    </div>

<div class="job-footer">
  <span class="job-location">{{ job.location }}</span>
  <RouterLink :to="`/jobs/${job.id}`" class="job-button">Read More</RouterLink>
</div>
  </div>
</template>

<style scoped>
.job-card {
  background-color: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin-bottom: 1rem;
}

.job-type {
  color: #666;
  font-size: 0.875rem;
  margin-bottom: 4px;
}

.job-title {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 12px;
  color: #222;
}

.job-description {
  font-size: 0.95rem;
  color: #444;
  margin-bottom: 0.5rem;
  transition: all 0.2s ease-in-out;
}

.clamp {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.toggle-btn {
  background: none;
  color: #10b981;
  border: none;
  padding: 0;
  font-size: 0.85rem;
  cursor: pointer;
  margin-bottom: 1rem;
}

.job-salary {
  font-weight: 600;
  color: #22c55e;
  margin-bottom: 1rem;
}

.job-suffix {
  font-weight: normal;
  color: #999;
  font-size: 0.85rem;
}

.job-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  margin-top: auto;
}

.job-location {
  color: #c2410c;
}

.job-button {
  background-color: #22c55e;
  color: #fff;
  padding: 0.4rem 1rem;
  border-radius: 6px;
  text-decoration: none;
  font-size: 0.85rem;
  transition: background 0.3s ease;
}

.job-button:hover {
  background-color: #16a34a;
}
</style>
