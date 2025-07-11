import { Routes } from '@angular/router';
import { PrimeiroComponent } from './componentes/primeiro/primeiro.component';
import { SegundoComponent } from './componentes/segundo/segundo.component';
import { LoginComponent } from './componentes/login/login.component';
import { AuthGuard } from './interceptors/auth-guard';
import { TerceiroComponenteComponent } from './componentes/terceiro-componente/terceiro-componente.component';
import { QuartoComponenteComponent } from './componentes/quarto-componente/quarto-componente.component';

export const routes: Routes = [
    { 
        path: '', component: LoginComponent},
    {
        path: 'primeiro',
        canActivate: [AuthGuard],
        component: PrimeiroComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'segundo',
        canActivate: [AuthGuard],
        component: SegundoComponent,
    },
    {
        path: 'terceiro',
        canActivate: [AuthGuard],
        component: TerceiroComponenteComponent,
    },
    {
        path: 'quarto',
        canActivate: [AuthGuard],
        component: QuartoComponenteComponent,
    },
];
