export interface ToastOptions {
  message: string;
  type?: 'success' | 'error' | 'info';
}

export function showToast(options: ToastOptions) {
  window.dispatchEvent(
    new CustomEvent('vue-toast:show', {
      detail: options,
    }),
  );
}
