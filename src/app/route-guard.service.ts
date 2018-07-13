import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router} from "@angular/router";

@Injectable()
export class RouteGuardService implements CanActivate {

  constructor(private router:Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.router.navigate(['users']); //redireziono a users se non posso accedere alla pagina che sto vietando
     
     return false; // posso accedere. Se return false non posso accedere.
  }

}
