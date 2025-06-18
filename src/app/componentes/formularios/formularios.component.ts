import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularModule } from '../../modules/angular.module';
import { PrimengModule } from '../../modules/primeng.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formularios',
  imports: [AngularModule, PrimengModule],
  templateUrl: './formularios.component.html',
  styleUrl: './formularios.component.css',
  encapsulation: ViewEncapsulation.None
})
export class FormulariosComponent implements AfterViewInit, OnInit
{
  constructor(private router: Router) {

  }

  ngAfterViewInit(): void 
  {
  }

  ngOnInit(): void 
  {
  }

  redirecionar(tipo:number)
  {
    switch(tipo)
    {
      case 1:{
        this.router.navigate(["/formularios-crud"]);
      }
    }

  }
}
