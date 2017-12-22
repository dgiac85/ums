//Affinche venga considerato come componente dobbiamo mettere un decoratore per decorarlo come component angular
import {Component,OnInit,Output,EventEmitter} from '@angular/core';
import {UserService} from '../services/user.service';
import { User } from '../interfaces/user';

@Component({
    selector:'app-users',
    //template: '<h2>Users</h2>' //Con il back apostrofo si puo andare accapo
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
    users:User[]=[];

    @Output() selectedUser = new EventEmitter<User>();
    title = 'Questa è una proprietà relativa agli utenti';

    constructor(private service:UserService){

    }

    ngOnInit(){
      this.users = this.service.getUsers();
    }

    onDeleteUser(user){
        this.service.deleteUser(user);
    }

    onSelectedUser(user){
        this.selectedUser.emit(user); //emettendolo, l' app component lo ascolta
    }

}
