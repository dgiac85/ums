import {User} from '../classes/user';
import { Injectable } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { HttpClient } from '@angular/common/http';

 /*{
            id: 1,
            name: 'Giacomo1',
            surname: 'Delfini1',
            email: 'delfini1giacomo@gmail.com'
        },
        {
            id:2,
            name: 'Giacomo2',
            surname: 'Delfini2',
            email: 'delfini2giacomo@gmail.com'
        },
        {
            id:3,
            name: 'Giacomo3',
            surname: 'Delfini3',
            email: 'delfini3giacomo@gmail.com'
        },
        {
            id:4,
            name: 'Giacomo4',
            surname: 'Delfini4',
            email: 'delfini4giacomo@gmail.com'
        },*/

@Injectable()
export class UserService {

    users: User[]=[]; //al posto di Array<User> si può inserire solo User[]

    private APIURL = 'http://localhost:8000/users';

    constructor(private http:HttpClient){

    }

    getUsers(){
        /*this.http.get(this.APIURL).subscribe(
            data=> {console.log(data)
            },
            error => {console.log(error.message)}

        );
        return this.users;*/
        //return una promise;o
        return this.http.get(this.APIURL);//ritorna un observable

    }

    getUser(id:number):User{
        return this.users.find(user=>user.id===id);
    }

    deleteUser(user){
        let index = this.users.indexOf(user);
        if (index>=0){
            this.users.splice(index,1);
        }
    }

    updateUser(user:User){
        const idx=this.users.findIndex((v) => v.id == user.id);
        if (idx !== -1) {
            this.users[idx]=user;
        }
    }

    createUser(user){
        let lastItem = this.users.slice(-1)[0];
        user.id = (lastItem.id)+1;
       //la create user fa sostanzialmente un push nell'array
        this.users.splice(this.users.length,0,user); 
        
    }
}