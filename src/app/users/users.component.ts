//Affinche venga considerato come componente dobbiamo mettere un decoratore per decorarlo come component angular
import {Component} from '@angular/core';

@Component({
    selector:'app-users',
    //template: '<h2>Users</h2>' //Con il back apostrofo si puo andare accapo
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})

export class UsersComponent{
    title = 'Questa è una proprietà relativa agli utenti';
}