<template>
  <Teleport to="body">
    <div v-if="visible" class="toast-container" :class="toastClass">
      Toast (Vue)
      <div class="toast-content">
        <span class="toast-icon">✓</span>
        <span class="toast-message">{{ message }}</span>
        <button class="toast-close" @click="close" aria-label="Fechar notificação">×</button>
      </div>
    </div>
  </Teleport>
</template>

<script>
export default {
  name: 'Toast',
  data() {
    return {
      visible: false,
      message: 'Operação realizada com sucesso!',
      type: 'success',
      duration: 5000,
    };
  },
  computed: {
    toastClass() {
      return `toast--${this.type}`;
    },
  },
  mounted() {
    window.addEventListener('vue-toast:show', this.handleShowEvent);
  },
  beforeUnmount() {
    window.removeEventListener('vue-toast:show', this.handleShowEvent);
  },
  methods: {
    handleShowEvent(event) {
      const { message, type } = event.detail;
      this.message = message;
      this.type = type || 'success';
      this.show();
    },
    show() {
      this.visible = true;
      if (this.duration > 0) {
        setTimeout(() => this.close(), this.duration);
      }
    },
    close() {
      this.visible = false;
    },
  },
};
</script>

<style scoped lang="scss">
.toast-container {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 9999;
  animation: slideIn 0.3s ease-out;

  @media (max-width: 640px) {
    bottom: 1rem;
    right: 1rem;
    left: 1rem;
  }
}

@keyframes slideIn {
  from {
    transform: translateX(400px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.toast-content {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background-color: #10b981;
  color: white;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  font-size: 0.95rem;
}

.toast-icon {
  font-size: 1.25rem;
  font-weight: bold;
}

.toast-message {
  flex: 1;
}

.toast-close {
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
}

// Variações de tipo
.toast--error {
  .toast-content {
    background-color: #ef4444;
  }
}

.toast--warning {
  .toast-content {
    background-color: #f59e0b;
  }
}

.toast--info {
  .toast-content {
    background-color: #3b82f6;
  }
}
</style>
