import { Component } from '@angular/core';
import { AngularModule } from '../../modules/angular.module';
import { PrimengModule } from '../../modules/primeng.module';
import { environment } from '../../../environments/environment';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-primeiro',
  imports: [AngularModule, PrimengModule, RouterLink],
  templateUrl: './primeiro.component.html',
  styleUrl: './primeiro.component.css'
})
export class PrimeiroComponent {

  dados:any = []
    
  constructor(){
    this.dados = [
      {'nomeLaudo': 'Videonistagmografia', 'descricao': '','dataTeste': '10/05/2025', 'solicitante': 'Dra. Jane Doe'},
      {'nomeLaudo': 'Audiometria', 'descricao': '','dataTeste': '10/05/2025', 'solicitante': 'Dra. Jane Doe'},
      {'nomeLaudo': 'Processamento Auditivo Central- PAC', 'descricao': '','dataTeste': '10/05/2025', 'solicitante': 'Dra. Jane Doe'},
      {'nomeLaudo': 'P300', 'descricao': '','dataTeste': '10/05/2025', 'solicitante': 'Dra. Jane Doe'},
      {'nomeLaudo': 'EOA - Emissões otoacusticas', 'descricao': '','dataTeste': '10/05/2025', 'solicitante': 'Dra. Jane Doe'},
      {'nomeLaudo': 'Imitanciometria', 'descricao': '','dataTeste': '10/05/2025', 'solicitante': 'Dra. Jane Doe'},
      {'nomeLaudo': 'VHIT', 'descricao': '','dataTeste': '10/05/2025', 'solicitante': 'Dra. Jane Doe'},
      {'nomeLaudo': 'VEMP CERVICAL', 'descricao': '','dataTeste': '10/05/2025', 'solicitante': 'Dra. Jane Doe'},
      {'nomeLaudo': 'VEMP OCULAR', 'descricao': '','dataTeste': '10/05/2025', 'solicitante': 'Dra. Jane Doe'},
      {'nomeLaudo': 'POTENCIAL EVOCADO DE TRONCO ENCEFÁLICO - BERA', 'descricao': '','dataTeste': '10/05/2025', 'solicitante': 'Dra. Jane Doe'}
    ];
  }

  getUrl()
  {
    return(environment.api.url);
  }
}
