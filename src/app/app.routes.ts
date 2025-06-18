import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { AuthGuard } from './interceptors/auth-guard';
import { FormulariosComponent } from './componentes/formularios/formularios.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { PerguntasComponent } from './componentes/perguntas/perguntas.component';
import { FormulariosCrudComponent } from './componentes/formularios-crud/formularios-crud.component';

export const routes: Routes = [
    { 
        path: '', component: LoginComponent},
    {
        path: 'formularios',
        canActivate: [AuthGuard],
        component: FormulariosComponent,
    },
    {
        path: 'formularios-crud',
        canActivate: [AuthGuard],
        component: FormulariosCrudComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'usuarios',
        canActivate: [AuthGuard],
        component: UsuariosComponent,
    },
    {
        path: 'perguntas',
        canActivate: [AuthGuard],
        component: PerguntasComponent,
    },
];
