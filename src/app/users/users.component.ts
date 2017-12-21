//Affinche venga considerato come componente dobbiamo mettere un decoratore per decorarlo come component angular
import {Component,OnInit} from '@angular/core';
import {UserService} from '../services/user.service';

@Component({
    selector:'app-users',
    //template: '<h2>Users</h2>' //Con il back apostrofo si puo andare accapo
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
    title = 'Questa è una proprietà relativa agli utenti';

    users=[];


    constructor(private service:UserService){

    }

    ngOnInit(){
      this.users = this.service.getUsers();
    }

    onDeleteUser(user){
        this.service.deleteUser(user);
    }

}
