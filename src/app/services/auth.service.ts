import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  private isUserLogged=false;

  constructor() { }

  isUserLoggedIn(){
    //logica che ci chiede se l'utente è loggato
    //return true //l'utente è loggato...potra essere un observalo...fare una chiamata all'utente per vedere se è legato o no

    this.isUserLogged=!!localStorage.getItem('token');
    return this.isUserLogged;
  }

  signIn(email: string, password: string){
    //alert(email + " " +password);
    //nell'usare laravel si fa una chiamata tramite json webtoken. si fa una subscribe a quella chiamata e in base alla callback si capisce se si è loggati o meno
    localStorage.setItem('token',email);
    //un servizio non deve avere dipendenze con il router. Quindi dobbiamo fare un emit per ottenere quello che vogliamo
    return true;
  }

  signUp(username:string, email:string, password:string){
    localStorage.setItem('token',email);
    return true;
  }
  
  logout(){
    localStorage.removeItem('token');
    this.isUserLogged=false;
  }
}
