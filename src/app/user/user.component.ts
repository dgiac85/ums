import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import { User } from '../classes/user';
import {Router} from '@angular/router';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input('user-data') user:User;
  @Output('onDeleteUser') userDeleted = new EventEmitter();
  @Output('onSelectedUser') userSelected = new EventEmitter();

  constructor(private userService:UserService, private route:Router) { }

  ngOnInit() {
  }

  deleteUser(){
   //this.userService.deleteUser(this.user);
   
   this.userDeleted.emit(this.user);
  }

  updateUser(){
    //this.userService.deleteUser(this.user);
    this.route.navigate(['users',this.user.id,'edit']);
    this.userSelected.emit(this.user);
  }

  showUserDetail(){
    this.route.navigate(['users',this.user.id]);
  }

}
