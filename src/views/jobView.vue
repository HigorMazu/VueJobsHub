<script setup>
import { ref, onMounted, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import BackButton from '@/components/BackButton.vue';
import { useToast } from 'vue-toastification';

const route = useRoute();
const router = useRouter();
const toast = useToast();
const job = ref(null);
const isLoading = ref(true);

const deleteJob = async () => {
  const confirmed = confirm('Are you sure you want to delete this job?');
  if (!confirmed) return;

  try {
    await axios.delete(`http://localhost:8000/jobs/${route.params.id}`);
    router.replace({ path: '/jobs', query: { deleted: 'true' } });
    alert('Job deleted successfully!');
  } catch (error) {
    console.error('Error deleting job:', error);
    toast.error('Error deleting job:');
  }
};

watchEffect(() => {
  if (route.query.success === 'true') {
    toast.success('Job Added Successfully');
    router.replace({ query: { ...route.query, success: undefined } });
  }
  if (route.query.updated === 'true') {
    toast.success('Job updated successfully');
    router.replace({ query: { ...route.query, updated: undefined } });
  }
  if (route.query.deleted === 'true') {
    toast.success('Job deleted successfully');
    router.replace({ query: { ...route.query, deleted: undefined } });
  }
});

onMounted(async () => {
  const jobId = route.params.id;
  try {
    const response = await axios.get(`http://localhost:8000/jobs/${jobId}`);
    const data = response.data;
    if (!data || Object.keys(data).length === 0) {
      job.value = null;
    } else {
      job.value = data;
    }
  } catch (error) {
    console.error('Error fetching job:', error);
    job.value = null;
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <div class="job-view">
    <BackButton />

    <div v-if="isLoading">
      <p>Loading job...</p>
    </div>

    <div v-else-if="job" class="job-detail">

      <div class="main-info">
        <p class="type">{{ job.type }}</p>
        <h2>{{ job.title }}</h2>
        <p class="location">{{ job.location }}</p>
        <h3>Job Description</h3>
        <p>{{ job.description }}</p>
        <h4>Salary</h4>
        <p>{{ job.salary }}</p>
      </div>

      <div class="sidebar">
        <div class="company-info">
          <h3>Company Info</h3>
          <strong>{{ job.company.name }}</strong>
          <p>{{ job.company.description }}</p>
          <p><strong>Email:</strong> <a :href="'mailto:' + job.company.contactEmail">{{ job.company.contactEmail }}</a></p>
          <p><strong>Phone:</strong> {{ job.company.contactPhone }}</p>
        </div>

        <div class="actions">
          <button class="edit" @click="router.push(`/jobs/${route.params.id}/edit`)">Edit Job</button>
          <button class="delete" @click="deleteJob">Delete Job</button>
        </div>
      </div>
    </div>

    <div v-else>
      <p>Job não encontrado.</p>
    </div>
  </div>
</template>

<style scoped>
.job-view {
  padding: 2rem;
}

.job-detail {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
}

.main-info {
  flex: 2;
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
}

.type {
  color: #888;
}

.location {
  color: #e74c3c;
  margin-bottom: 1rem;
}

.sidebar {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.company-info {
  background: #ecfdf5;
  padding: 1rem;
  border-radius: 8px;
}

.actions {
  display: flex;
  gap: 1rem;
}

.edit {
  flex: 1;
  background-color: #10b981;
  color: white;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.delete {
  flex: 1;
  background-color: #ef4444;
  color: white;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
