import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  private isUserLogged=false;

  constructor() { }

  isUserLoggedIn(){
    //logica che ci chiede se l'utente è loggato
    //return true //l'utente è loggato...potra essere un observalo...fare una chiamata all'utente per vedere se è legato o no
    return this.isUserLogged;
  }

  signIn(email: string, password: string){

  }

  signUp(username:string, email:string, password:string){

  }
  
  logout(){
    this.isUserLogged=false;
  }
}
