import { Component } from '@angular/core';
import { AngularModule } from '../../modules/angular.module';
import { PrimengModule } from '../../modules/primeng.module';

@Component({
  selector: 'app-terceiro-componente',
  imports: [AngularModule, PrimengModule],
  templateUrl: './terceiro-componente.component.html',
  styleUrl: './terceiro-componente.component.css'
})
export class TerceiroComponenteComponent {

  dados:any = [];
  audiometria:any = [];

  constructor(){
    this.dados = [
      {'nomeLaudo': 'Direita', 'limiarlrf': '','limiarldf': '', 'limiarsn': '', 'recintensidade': '', 'recsn': '', 'reclist1': '', 'recacertos1': '', 'reclist2': '', 'recacertos2': ''},
      {'nomeLaudo': 'Esquerda', 'limiarlrf': '','limiarldf': '', 'limiarsn': '', 'recintensidade': '', 'recsn': '', 'reclist1': '', 'recacertos1': '', 'reclist2': '', 'recacertos2': ''},
    ];

    this.audiometria = [
      {'grauperda': 'normal1', 'od': '', 'oe': ''},
      {'grauperda': 'normal2', 'od': '', 'oe': ''},
      {'grauperda': 'leve', 'od': '', 'oe': ''},
      {'grauperda': 'moderado', 'od': '', 'oe': ''},
      {'grauperda': 'Moderamente severo', 'od': '', 'oe': ''},
      {'grauperda': 'Moderamente severo', 'od': '', 'oe': ''},
      {'grauperda': 'severo', 'od': '', 'oe': ''},
      {'grauperda': 'Profundo', 'od': '', 'oe': ''},
      {'grauperda': 'Perda completa ou total', 'od': '', 'oe': ''}
    ]
  }
}
