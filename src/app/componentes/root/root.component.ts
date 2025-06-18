import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet, RouterModule, Router } from '@angular/router';
import { BlockUIComponent } from 'ng-block-ui';
import { MessageService } from 'primeng/api';
import { AngularModule } from '../../modules/angular.module';
import { PrimengModule } from '../../modules/primeng.module';
import { MenuComponent } from '../menu/menu.component';
import { MenuItemModel } from '../../data/menu/menu-item.model';
import { MenuUsuarioModel } from '../../data/menu/menu-usuario.model';
import { LoginComponent } from "../login/login.component";
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, MenuComponent, PrimengModule, AngularModule],
  providers:[MessageService, BlockUIComponent, LocalStorageService],
  templateUrl: './root.component.html',
  styleUrl: './root.component.css'
})
export class RootComponent implements AfterViewInit
{
  menus: MenuItemModel[] = [];
  menuUsuario!:MenuUsuarioModel;
 
  constructor(private storageService:LocalStorageService, private router:Router){
  }
  
  ngAfterViewInit(): void {
    setTimeout(()=>{
      this.criarNavegacao();
    })
  }

  isLogged()
  {
    return(this.storageService.isLoggedIn());
  }

  criarNavegacao()
  {
    this.menus.push(new MenuItemModel(0, true, false, false, "Administração", "bi bi-gear", "", [
      new MenuItemModel(1, true, false, false, "Primeiro Componente", "bi bi-house", "/primeiro"),
      new MenuItemModel(2, true, false, false, "Segundo Componente", "bi bi-house", "/segundo")
    ]));
    
    this.menus.push(new MenuItemModel(3, true, false, false, "Usuários", "bi bi-person-gear  pe-1 ", "/usuarios"));
    this.menus.push(new MenuItemModel(4, true, false, false, "Formulários", "bi bi-ui-checks pe-1 ", "/formularios"));
    this.menus.push(new MenuItemModel(8, true, false, false, "Perguntas", "bi bi-patch-question pe-1 ", "/perguntas"));
    // this.menus.push(new MenuItemModel(3, true, false, false, "Usuários", "bi bi-person-gear ms-3 pe-1 ", "/usuarios"));
    // this.menus.push(new MenuItemModel(4, true, false, false, "Formulários", "bi bi-ui-checks ms-4 pe-1 ", "/formularios"));
    // this.menus.push(new MenuItemModel(8, true, false, false, "Perguntas", "bi bi-patch-question ms-4 pe-1 ", "/perguntas"));

    this.menuUsuario = new MenuUsuarioModel(4,"Jhon Doe", "https://github.com/mdo.png", false, [
      new MenuItemModel(5, true, false, false, "Dados Pessoais", "bi bi-credit-card-2-front"),
      new MenuItemModel(6, true, true, false, ""),
      new MenuItemModel(7, true, false, false, "Sair F", "bi bi-door-open", "", undefined, (a:MenuItemModel)=>{
        this.storageService.clearAll();
        this.router.navigate(['/']);
      }),
    ]);
  }
}
