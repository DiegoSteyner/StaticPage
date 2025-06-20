import { Routes } from '@angular/router';
import { PrimeiroComponent } from './componentes/primeiro/primeiro.component';
import { SegundoComponent } from './componentes/segundo/segundo.component';
import { LoginComponent } from './componentes/login/login.component';
import { AuthGuard } from './interceptors/auth-guard';

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
];
