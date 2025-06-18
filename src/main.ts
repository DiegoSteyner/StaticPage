import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { RootComponent } from './app/componentes/root/root.component';

// bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
bootstrapApplication(RootComponent, appConfig).catch((err) => console.error(err));
