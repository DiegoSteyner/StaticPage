import { AfterViewInit, Component, OnInit } from '@angular/core';
import { PrimengModule } from '../../modules/primeng.module';
import { AngularModule } from '../../modules/angular.module';

@Component({
  selector: 'app-formularios-crud',
  imports: [AngularModule, PrimengModule],
  templateUrl: './formularios-crud.component.html',
  styleUrl: './formularios-crud.component.css'
})
export class FormulariosCrudComponent implements AfterViewInit, OnInit
{
  secoes:string[] = [];
  nomeSecao:string = "";

  constructor(){

  }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }

  addSecao()
  {
    this.secoes.push(this.nomeSecao);
    this.nomeSecao = "";
  }
}
