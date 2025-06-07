<template>
  <nav class="navbar">
    <div class="navbar-left">
      <img src="@/assets/logo.png" alt="Vue Logo" class="logo" />
    </div>
    <ul class="navbar-links">
      <li><RouterLink to="/" class="nav-link" active-class="active">Home</RouterLink></li>
      <li><RouterLink to="/jobs" class="nav-link" active-class="active">Jobs</RouterLink></li>
      <li><RouterLink to="/jobs/add" class="nav-link" active-class="active">Add Job</RouterLink></li>
    </ul>
  </nav>
</template>


<script setup>
import { RouterLink, useRoute } from 'vue-router';

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
}
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  background-color: #2c8a2c;
  padding: 10px 20px;
  color: white;
}

.logo {
  width: 30px;
  height: 30px;
}

.navbar-links {
  list-style: none;
  display: flex;
  margin-left: auto;
  padding: 0;
}

.navbar-links li {
  margin-left: 15px;
}

.navbar-links a {
  text-decoration: none;
  color: white;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.navbar-links a:hover {
  background-color: #1f621f;
}

.navbar-links a.active {
  background-color: #1f621f;
}
</style>
