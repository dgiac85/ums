import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../services/auth.service"
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit() {
  }

  signIn(form: NgForm) {
    //alert(form.value.email);
    //alert(form.valid);

    if (!form.valid){
      return false;
    }
    let result= this.auth.signIn(form.value.email, form.value.password);
    if (result){
      this.router.navigate(['/']);
    }
  }

  


}
