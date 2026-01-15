import { defineCustomElement } from 'vue';
import Toast from './components/Toast.vue';

// Cria e registra o Web Component
const ToastElement = defineCustomElement(Toast);
customElements.define('vue-toast', ToastElement);
