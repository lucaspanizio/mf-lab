import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { FormComponent } from './app/form/form.component';

// Registra o Web Component automaticamente
createApplication()
  .then((appRef) => {
    const formElement = createCustomElement(FormComponent, {
      injector: appRef.injector,
    });

    if (!customElements.get('app-form')) {
      customElements.define('app-form', formElement);
    }
  })
  .catch((err) => console.error('[Angular] Erro:', err));
