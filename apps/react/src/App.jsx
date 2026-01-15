import { Suspense, lazy, useEffect } from 'react';

import { useToast } from './hooks/useToast';
import { Navbar } from './components/Navbar';

const AngularForm = lazy(async () => {
  await import('angularApp/WebComponent');
  return { default: () => <app-form /> };
});
const VueToast = lazy(async () => {
  await import('vueApp/WebComponent');
  return { default: () => <vue-toast /> };
});

export function App() {
  const showToast = useToast();

  useEffect(() => {
    const handleFormSubmit = (event) => {
      if (showToast) {
        showToast({
          type: 'success',
          message: event.detail.message || 'Mensagem enviada!',
        });
      }
    };

    window.addEventListener('form:submit', handleFormSubmit);
    return () => window.removeEventListener('form:submit', handleFormSubmit);
  }, [showToast]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white p-8 rounded-lg shadow">
          <Suspense fallback={<div className="text-gray-500">Carregando formulário...</div>}>
            <AngularForm />
          </Suspense>
        </div>

        <Suspense fallback={null}>
          <VueToast />
        </Suspense>
      </main>
    </div>
  );
}
