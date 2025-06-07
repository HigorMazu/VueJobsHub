<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import { useToast } from 'vue-toastification';

const route = useRoute();
const router = useRouter();
const toast = useToast();

const form = ref({
  title: '',
  type: '',
  location: '',
  description: '',
  salary: '',
  company: {
    name: '',
    description: '',
    contactEmail: '',
    contactPhone: ''
  }
});

const isLoading = ref(true);

onMounted(async () => {
  try {
    const response = await axios.get(`http://localhost:8000/jobs/${route.params.id}`);
    form.value = response.data;
  } catch (error) {
    console.error('Error loading job:', error);
    toast.error('Error loading job:');
  } finally {
    isLoading.value = false;
  }
});

const updateJob = async () => {
  try {
    await axios.put(`http://localhost:8000/jobs/${route.params.id}`, form.value);
    alert('Job updated successfully!');
    router.push(`/jobs/${route.params.id}`);
  } catch (error) {
    console.error('Error updating job:', error);
    toast.error('Error updating job:');
  }
};
</script>

<template>
  <div class="edit-job">
    <h2>Edit Job</h2>

    <form @submit.prevent="updateJob" v-if="!isLoading">
      <label>Title</label>
      <input v-model="form.title" />

      <label>Type</label>
      <input v-model="form.type" />

      <label>Location</label>
      <input v-model="form.location" />

      <label>Description</label>
      <textarea v-model="form.description" />

      <label>Salary</label>
      <input v-model="form.salary" />

      <h3>Company Info</h3>

      <label>Company Name</label>
      <input v-model="form.company.name" />

      <label>Company Description</label>
      <textarea v-model="form.company.description" />

      <label>Email</label>
      <input v-model="form.company.contactEmail" />

      <label>Phone</label>
      <input v-model="form.company.contactPhone" />

      <button type="submit" class="save-btn">Save Changes</button>
    </form>

    <p v-else>Loading job data...</p>
  </div>
</template>

<style scoped>
.edit-job {
  max-width: 600px;
  margin: 2rem auto;
}
label {
  display: block;
  margin-top: 1rem;
  font-weight: bold;
}
input, textarea {
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.25rem;
  border: 1px solid #ccc;
  border-radius: 6px;
}
.save-btn {
  margin-top: 2rem;
  background-color: #10b981;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
</style>
