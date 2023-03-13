<script setup>
import ContainerCP from './ContainerCP.vue'
import UserBarCP from './UserBarCP.vue'
</script>

<template>
  <ContainerCP>
    <div class="profile-container">
      <UserBarCP
        username="Username01"
        :userInfo="{
          posts: 4,
          followers: 100,
          following: 342
        }"
      />
      <h1>IMAGEGALLERY</h1>
    </div>
  </ContainerCP>
</template>

<style scoped>
.profile-container {
  padding: 20px 0;
}
</style>
