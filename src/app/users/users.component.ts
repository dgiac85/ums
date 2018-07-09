//Affinche venga considerato come componente dobbiamo mettere un decoratore per decorarlo come component angular
import {Component,OnInit,Output,EventEmitter} from '@angular/core';
import {UserService} from '../services/user.service';
import { User } from '../classes/user';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
    selector:'app-users',
    //template: '<h2>Users</h2>' //Con il back apostrofo si puo andare accapo
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
    users:User[]=[];

    @Output("onSelectedUser") selectedUser = new EventEmitter<User>();

    constructor(private service:UserService, private router: Router, private route: ActivatedRoute){

    }

    ngOnInit(){
      //this.users = this.service.getUsers();
      //we subscribe to the service
      this.service.getUsers().subscribe(
          response => this.users = response['data']
      );
    }

    onDeleteUser(user:User){
//utilizzare una confirm

        const deleteUser= confirm ('Do you really want to delete user ' + user.name + ' ' + (user.lastname==null? '' : user.lastname)+'?');
        if (deleteUser){
            this.service.deleteUser(user).subscribe(
                response => {
                    alert (response['message']);
                    const idx=this.users.indexOf(user);
                    this.users.splice(idx,1);
                }
            );
        }
    }

    onSelectedUser(user){
        const userCopy=Object.assign({},user)
        this.selectedUser.emit(userCopy); //emettendolo, l' app component lo ascolta
        //a userCopy diamo soltanto una copia dell'utente selezionato
    }

}
