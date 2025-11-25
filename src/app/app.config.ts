import {
  ApplicationConfig,
  CSP_NONCE,
  ErrorHandler,
  inject,
  NgZone,
  provideBrowserGlobalErrorListeners,
  provideEnvironmentInitializer,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { CustomErrorHandler } from './custom-error-handler';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideEnvironmentInitializer(() => {
      const csp_nonce = inject(CSP_NONCE);
    }),
    {
      provide: ErrorHandler,
      useClass: CustomErrorHandler,
    },
  ],
};
