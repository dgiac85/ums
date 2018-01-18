import { Component,Input,OnInit } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  private userCopy: User;
  private __user: User;
  
  @Input() set user(user:User){
    this.__user = user; //variabile locale interna
    this.userCopy = Object.assign({}, user);    
  }

  get user() {
      return this.__user;
  }

  //userService:UserService

  constructor(private userService:UserService, private route: ActivatedRoute, private router: Router) { 
    
   
  }

  ngOnInit() {
    this.user=new User();

    this.route.params.subscribe(
      (params) => {
        //se siamo in inserimeto e non in modifica
        if (!params.id){
          return;
        }
        this.user= this.userService.getUser(+params.id);
      }
    );
  }

  saveUser(){
    if (this.user.id>0){
      this.userService.updateUser(this.user);
    }
    else{
      this.userService.createUser(this.user);
    }
    this.router.navigate(['users']);
  }

  resetForm(form){
    if (this.user.id === 0 ){
      this.user=new User();
    } else {
      this.user = this.userCopy;
    }
  }

  backToUsers(){
    this.router.navigate(['users']);
  }

}
