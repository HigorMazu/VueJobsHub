<script setup>
import { reactive } from 'vue';
import axios from 'axios';
import { useToast } from 'vue-toastification';
import { useRouter } from 'vue-router';

const router = useRouter();

const form = reactive({
  type: 'Full-Time',
  title: '',
  description: '',
  salary: '',
  location: '',
  company: {
    name: '',
    description: '',
    contactEmail: '',
    contactPhone: ''
  },
});

const handleSubmit = async () => {
  if (
    !form.title.trim() ||
    !form.description.trim() ||
    !form.salary.trim() ||
    !form.location.trim() ||
    !form.company.name.trim() ||
    !form.company.description.trim() ||
    !form.company.contactEmail.trim() ||
    !form.company.contactPhone.trim()
  ) {
    alert('Please fill in all fields before submitting.');
    return;
  }

  const newJob = {
    title: form.title,
    type: form.type,
    location: form.location,
    description: form.description,
    salary: form.salary,
    company: {
      name: form.company.name,
      description: form.company.description,
      contactEmail: form.company.contactEmail,
      contactPhone: form.company.contactPhone,
    },
  };

  try {
    const response = await axios.post('http://localhost:8000/jobs', newJob);
    const createdJob = response.data;
    alert('Job registered successfully!');
    router.push(`/jobs/${createdJob.id}`);
  } catch (error) {
    console.error('Error submitting job:', error);
    alert('Error registering the job.');
  }
};
</script>

<template>
  <div class="add-job-container">
    <h2 class="title">Add Job</h2>

    <form @submit.prevent="handleSubmit" class="job-form">
      <!-- Job Type -->
      <div class="form-group">
        <label>Job Type</label>
        <select v-model="form.type">
          <option>Full-Time</option>
          <option>Part-Time</option>
          <option>Contract</option>
          <option>Freelance</option>
        </select>
      </div>

      <!-- Job Title -->
      <div class="form-group">
        <label>Job Listing Name</label>
        <input type="text" v-model="form.title" placeholder="eg. Beautiful Apartment in Miami" />
      </div>

      <!-- Description -->
      <div class="form-group">
        <label>Description</label>
        <textarea v-model="form.description" placeholder="Add any job duties, expectations, requirements, etc" rows="4" />
      </div>

      <!-- Salary -->
      <div class="form-group">
        <label>Salary</label>
        <input type="text" v-model="form.salary" placeholder="$70K – $80K" />
      </div>

      <!-- Location -->
      <div class="form-group">
        <label>Location</label>
        <input type="text" v-model="form.location" placeholder="Company Location" />
      </div>

      <h3 class="section-title">Company Info</h3>

      <!-- Company Name -->
      <div class="form-group">
        <label>Company Name</label>
        <input type="text" v-model="form.company.name" placeholder="Company Name" />
      </div>

      <!-- Company Description -->
      <div class="form-group">
        <label>Company Description</label>
        <textarea v-model="form.company.description" placeholder="What does your company do?" rows="3" />
      </div>

      <!-- Email -->
      <div class="form-group">
        <label>Contact Email</label>
        <input type="email" v-model="form.company.contactEmail" placeholder="Email address for applicants" />
      </div>

      <!-- Phone -->
      <div class="form-group">
        <label>Contact Phone</label>
        <input type="text" v-model="form.company.contactPhone" placeholder="Phone number for applicants" />
      </div>

      <!-- Submit -->
      <button type="submit" class="submit-button">Post Job</button>
    </form>
  </div>
</template>

<style scoped>
.add-job-container {
  max-width: 600px;
  margin: 2rem auto;
  background: #f0fdf4;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}

.title {
  text-align: center;
  color: #15803d;
  margin-bottom: 2rem;
}

.section-title {
  margin-top: 2rem;
  color: #065f46;
  font-size: 1.1rem;
}

.job-form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  font-weight: 600;
  margin-bottom: 0.4rem;
  color: #1f2937;
}

input,
textarea,
select {
  padding: 0.6rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 0.95rem;
  background-color: #fff;
}

input:focus,
textarea:focus,
select:focus {
  outline: none;
  border-color: #22c55e;
  box-shadow: 0 0 0 2px #bbf7d0;
}

.submit-button {
  background-color: #22c55e;
  color: white;
  padding: 0.8rem 1.2rem;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;
}

.submit-button:hover {
  background-color: #16a34a;
}
</style>
