<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps(['isLogin'])

const visible = ref(false)

const showModal = () => {
  visible.value = true
}

const handleOk = () => {
  visible.value = false
}

const title = props.isLogin ? 'Login' : 'Signup'
</script>

<template>
  <div>
    <a-button class="btn" type="primary" @click="showModal">{{ title }}</a-button>
    <a-modal v-model:visible="visible" :title="title" @ok="handleOk">
      <a-input class="input" v-if="!isLogin" v-model:value="value" placeholder="Username" />
      <a-input class="input" v-model:value="value" placeholder="E-mail" />
      <a-input class="input" v-model:value="value" placeholder="Password" />
    </a-modal>
  </div>
</template>

<style scoped>
.btn {
  margin-left: 1rem;
}

.input {
  margin-top: 0.5rem;
}
</style>
