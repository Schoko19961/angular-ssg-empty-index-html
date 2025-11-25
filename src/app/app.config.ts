import {
  ApplicationConfig,
  ErrorHandler,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { TestBreakpointService } from './test-breakpoint.service';
import { provideEffects, provideEffectsManager } from '@ngneat/effects-ng';
import { CustomErrorHandler } from './custom-error-handler';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideEffectsManager(),
    provideEffects(TestBreakpointService),
    {
      provide: ErrorHandler,
      useClass: CustomErrorHandler,
    },
  ],
};
