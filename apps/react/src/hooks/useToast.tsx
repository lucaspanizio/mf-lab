import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

interface ToastOptions {
  message: string;
  type?: 'success' | 'error' | 'info';
}

type ShowToastFn = (options: ToastOptions) => void;

const ToastContext = createContext<ShowToastFn | null>(null);

interface ToastProviderProps {
  children: ReactNode;
}

export function ToastProvider({ children }: ToastProviderProps) {
  const [showToast, setShowToast] = useState<ShowToastFn | null>(null);

  useEffect(() => {
    // @ts-ignore
    import('vueApp/toast').then((module) => {
      setShowToast(() => module.showToast);

    });
  }, []);

  return <ToastContext.Provider value={showToast}>{children}</ToastContext.Provider>;
}

export function useToast(): ShowToastFn | null {
  const showToast = useContext(ToastContext);

  if (showToast === undefined) {
    throw new Error('useToast must be used within ToastProvider');
  }

  return showToast;
}
