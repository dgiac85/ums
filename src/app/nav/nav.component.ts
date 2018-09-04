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

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.isUserLoggedIn
  }

  newUser(){
    this.onNewUser.emit();
  }

  logout(e){
    e.preventDefault();
    this.auth.logout();
    this.router.navigate(['login']);
  }


}
