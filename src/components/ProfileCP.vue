<script setup>
import ContainerCP from './ContainerCP.vue'
</script>

<template>
  <ContainerCP>
    <div class="profile-container">
      <h1>USERBAR</h1>
      <h1>IMAGEGALLERY</h1>
    </div>
  </ContainerCP>
</template>

<style scoped>
.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
}
</style>
