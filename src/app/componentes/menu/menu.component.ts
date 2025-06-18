import { AfterViewInit, Component, Input } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MenuItemModel } from '../../data/menu/menu-item.model';
import { CommonModule } from '@angular/common';
import * as $ from 'jquery';
import { AngularModule } from '../../modules/angular.module';
import { PrimengModule } from '../../modules/primeng.module';
import { MenuUsuarioModel } from '../../data/menu/menu-usuario.model';


@Component({
  selector: 'app-menu',
  imports: [RouterModule, CommonModule, AngularModule, PrimengModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements AfterViewInit
{
  height:string = '10';

  @Input()
  menuItens: MenuItemModel[] = [];

  @Input()
  tipoMenu:String | "barra-menu-1" | "menu-lateral" = "barra-menu-1"
  
  @Input()
  menuUsuario!:MenuUsuarioModel;

  constructor(private router: Router) {
   
  }

  ngAfterViewInit(): void {
    setTimeout(() =>{
      this.height = (this.getDocumentHeight());
    })
  }

  public navigate(navegacao: MenuItemModel) {
    this.menuItens.forEach(element => {
      element.selecionado = element.indexMenu == navegacao.indexMenu;
    });

    if(navegacao.sendTo && !navegacao.callBack)
    {
      this.router.navigate([navegacao.sendTo]);
    }
    else if(navegacao.callBack){
      navegacao.callBack.call(undefined, navegacao)
    }
  }

  getDocumentHeight() {
    return (((jQuery(document).height() ?? 0) - 70) + 'px');
  }

  trackByNavegacao(index: number, item: MenuItemModel) {
    return item.indexMenu;
  }
}
