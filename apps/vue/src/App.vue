<template>
  <div id="app">
    <button @click="showToastMessage">Testar Toast</button>
    <Toast />
  </div>
</template>

<script setup>
import Toast from './components/Toast.vue';
import { showToast } from './toast-api';

const showToastMessage = () => {
  showToast({
    message: 'Toast funcionando!',
    type: 'success',
  });
};
</script>

<style>
body {
  margin: 0;
  font-family: system-ui, -apple-system, sans-serif;
  padding: 2rem;
}

button {
  padding: 0.75rem 1.5rem;
  background: #155dfc;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
}

button:hover {
  background: #193cb8;
}
</style>
