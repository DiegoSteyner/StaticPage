import { AfterViewInit, Component } from '@angular/core';
import { AngularModule } from '../../modules/angular.module';
import { PrimengModule } from '../../modules/primeng.module';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-login',
  imports: [AngularModule, PrimengModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements AfterViewInit {

  constructor(private router: Router, private storageService:LocalStorageService){

  }

  ngAfterViewInit(): void {
    if(this.storageService.isLoggedIn())
    {
      this.router.navigate(["/primeiro"]);
    }
  }

  redirecionar() {
    this.storageService.addJwtToken("Um token").then(e =>{
      if(e)
      {
        this.router.navigate(["/primeiro"]);
      }
    });
  }

}
