import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { StorageEnum } from '../data/enums/storage-enum';

@Injectable({providedIn: 'root'})
export class LocalStorageService 
{
  constructor() { }

  addJwtToken = (token?:string) => new Promise((resolve, reject) => {
    this.addToken(token);
    resolve(true);
  });
  
  removeJwtToken = () => new Promise((resolve, reject) => {
    this.removeToken();
    resolve(true);
  });
  
  getJwtId = () => new Promise((resolve, reject) => {
    resolve(this.getTokenId());
  });
  
  getJwtString = () => new Promise((resolve, reject) => {
    resolve(this.getToken());
  });

  public clearAll(): void 
  {
    window.sessionStorage.clear();
  }

  public isLoggedIn(): boolean 
  {
    if (window.sessionStorage.getItem(StorageEnum.ACESS_TOKEN)) 
    {
      return(true);
    }

    return(false);
  }
  
  private addToken(token?:string)
  {
    window.sessionStorage.setItem(StorageEnum.ACESS_TOKEN, token ? token : "");
  }

  private removeToken()
  {
    window.sessionStorage.removeItem(StorageEnum.ACESS_TOKEN);
  }

  private getTokenId():string
  {
    if(this.isLoggedIn())
    {
      let token:any = new JwtHelperService().decodeToken(this.getToken());

      return(token["jti"]);
    }

    return("");
  }

  private getToken():string
  {
    return(window.sessionStorage.getItem(StorageEnum.ACESS_TOKEN)+"");
  }
}