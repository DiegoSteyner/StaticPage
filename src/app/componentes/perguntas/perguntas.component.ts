import { Component } from '@angular/core';
import { AngularModule } from '../../modules/angular.module';
import { PrimengModule } from '../../modules/primeng.module';

@Component({
  selector: 'app-perguntas',
  imports: [AngularModule, PrimengModule],
  templateUrl: './perguntas.component.html',
  styleUrl: './perguntas.component.css'
})
export class PerguntasComponent {

}
