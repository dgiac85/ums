import {User} from '../classes/user';
import { Injectable } from '@angular/core';
import { UserComponent } from '../user/user.component';


export class UserService{

    users:Array<User>=[ //al posto di Array<User> si può inserire solo User[]
        {
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
        },

    ];

    getUsers(){
        return this.users;
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