import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Output() onNewUser = new EventEmitter()

  private isUserLoggedIn = false; 

  constructor(private auth: AuthService, private router: Router) { } //tutta una questione di routing

  ngOnInit() {
    console.log("passa da init")
    this.isUserLoggedIn=this.auth.isUserLoggedIn();
  }

  newUser(){
    this.onNewUser.emit();
  }

  logout(e){
    e.preventDefault();
    this.auth.logout();
    this.isUserLoggedIn=this.auth.isUserLoggedIn();
    this.router.navigate(['login']);
  }

  signIn(e){
    e.preventDefault();
    this.isUserLoggedIn=this.auth.isUserLoggedIn();
    this.router.navigate(['login']);
  }

  signUp(e){
    e.preventDefault();
    this.isUserLoggedIn=this.auth.isUserLoggedIn();
    this.router.navigate(['signup']);
  }

  onLoggedUser(){
    console.log("sono loggato");
    this.isUserLoggedIn=this.auth.isUserLoggedIn();
  }


}
