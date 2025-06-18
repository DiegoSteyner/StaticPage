import { Component } from '@angular/core';
import { AngularModule } from '../../modules/angular.module';
import { PrimengModule } from '../../modules/primeng.module';

@Component({
  selector: 'app-usuarios',
  imports: [AngularModule, PrimengModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {

}
