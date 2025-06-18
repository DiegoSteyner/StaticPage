import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import Material from '@primeng/themes/material';
import Lara from '@primeng/themes/lara';
import Nora from '@primeng/themes/nora';
import { SharedDataService } from './services/shared.data.service';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { definePreset } from '@primeng/themes';
import { AuthGuard } from './interceptors/auth-guard';

const TemaCustom = definePreset(Aura, {
  semantic: {
      primary: {
          50: '{blue.50}',
          100: '{blue.100}',
          200: '{blue.200}',
          300: '{blue.300}',
          400: '{blue.400}',
          500: '{blue.500}',
          600: '{blue.600}',
          700: '{blue.700}',
          800: '{blue.800}',
          900: '{blue.900}',
          950: '{blue.950}'
      }
  }
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideAnimationsAsync(),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    importProvidersFrom([BrowserModule, BrowserAnimationsModule, SharedDataService]),
    providePrimeNG({
        theme: {
            preset: TemaCustom
        }
    }),
    AuthGuard
  ]
};
