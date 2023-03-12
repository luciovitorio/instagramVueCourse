<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

import Container from './ContainerCP.vue'
import AuthModalCP from './AuthModalCP.vue'

const searchUserName = ref('')
const isAuthenticated = ref(false)

const onSearch = () => {}
</script>

<template>
  <a-layout-header>
    <Container>
      <div class="nav-container">
        <div class="right-content">
          <RouterLink to="/">Instagram</RouterLink>
          <a-input-search
            v-model:value="searchUserName"
            placeholder="Search username..."
            style="width: 200px"
            @search="onSearch"
          />
        </div>
        <div class="left-content" v-if="!isAuthenticated">
          <AuthModalCP :isLogin="false" />
          <AuthModalCP :isLogin="true" />
        </div>
        <div class="left-content" v-else>
          <a-button type="primary">Profile</a-button>
          <a-button type="primary">Logout</a-button>
        </div>
      </div>
    </Container>
  </a-layout-header>
</template>

<style scoped>
.nav-container {
  display: flex;
  justify-content: space-between;
}

.right-content {
  display: flex;
  align-items: center;
}

.right-content a {
  margin-right: 1rem;
}

.left-content {
  display: flex;
  align-items: center;
}

.left-content button {
  margin-left: 1rem;
}
</style>
