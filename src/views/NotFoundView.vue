<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="not-found" style="text-align: center; padding: 100px;">
    <img src="https://cdn-icons-png.flaticon.com/512/564/564619.png" alt="Warning" width="80" />
    <h1>404 Not Found</h1>
    <p>This page does not exist</p>
    <RouterLink to="/">
      <button style="margin-top: 20px; padding: 10px 20px; background-color: green; color: white; border: none; border-radius: 5px;">
        Go Back
      </button>
    </RouterLink>
  </div>
</template>
