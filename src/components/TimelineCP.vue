<script setup>
import CardCP from './CardCP.vue'
import ContainerCP from './ContainerCP.vue'

const data = [
  {
    id: 1,
    username: 'Usuario01',
    url: 'https://i.pravatar.cc/150?img=5',
    caption: 'Lorem ipsum dolor sit.'
  },
  {
    id: 2,
    username: 'Usuario02',
    url: 'https://i.pravatar.cc/150?img=4',
    caption: 'Lorem ipsum dolor sit amet consectetur.'
  },
  {
    id: 3,
    username: 'Usuario03',
    url: 'https://i.pravatar.cc/150?img=2',
    caption: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, aliquid!'
  }
]
</script>

<template>
  <ContainerCP>
    <div class="timeline-container">
      <CardCP v-for="post in data" :key="post.id" :post="post" />
    </div>
  </ContainerCP>
</template>

<style scoped>
.timeline-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
}
</style>
