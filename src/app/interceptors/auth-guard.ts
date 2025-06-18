import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';


@Injectable()
export class AuthGuard implements CanActivate 
{
  jwtHelper:JwtHelperService = new JwtHelperService();

  constructor(private storageService: LocalStorageService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> 
  {
    if (this.storageService.isLoggedIn()) 
    {
      console.log("veio aqui no auth")
      return (true);
    }
    else
    {
      this.storageService.clearAll();
    }

    this.router.navigate(["/login"]);
    return (false);
  }
}