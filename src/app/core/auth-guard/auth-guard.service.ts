import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private _router: Router) { }

  canActivate() { //canActivate devuelve true o false para dejar ir a la ruta o no
    if(this.userAuthenticated()){
      return true;
    } 

    this._router.navigate(['/home/login']);
    return false;
  }

  //En este metodo se haria la comprobacion de autenticacion
  private userAuthenticated(): boolean {
    return true;
  }

}
