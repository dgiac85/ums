import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router} from "@angular/router";
import {AuthService} from './services/auth.service';

@Injectable()
export class RouteGuardService implements CanActivate {

  constructor(private router:Router, private auth : AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //this.router.navigate(['users']); //redireziono a users se non posso accedere alla pagina che sto vietando
     
     //return false; // posso accedere. Se return false non posso accedere.
     if(this.auth.isUserLoggedIn()){
       return true;
     } else {
       this.router.navigate(['login']);
     }
  }

}
