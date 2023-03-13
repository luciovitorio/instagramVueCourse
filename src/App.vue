<script setup>
import { RouterView } from 'vue-router'

import Navbar from './components/NavbarCP.vue'
</script>

<template>
  <main>
    <Navbar />
    <RouterView />
  </main>
</template>

<style scoped></style>
