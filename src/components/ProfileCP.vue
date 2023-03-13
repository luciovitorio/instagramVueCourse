<script setup>
import ContainerCP from './ContainerCP.vue'
import ImageGalleryCP from './ImageGalleryCP.vue'
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
      <ImageGalleryCP
        :posts="[
          {
            id: 1,
            image: 'https://i.pravatar.cc/150?img=5'
          },
          {
            id: 1,
            image: 'https://i.pravatar.cc/150?img=5'
          },
          {
            id: 1,
            image: 'https://i.pravatar.cc/150?img=5'
          },
          {
            id: 1,
            image: 'https://i.pravatar.cc/150?img=5'
          }
        ]"
      />
    </div>
  </ContainerCP>
</template>

<style scoped>
.profile-container {
  padding: 20px 0;
}
</style>
