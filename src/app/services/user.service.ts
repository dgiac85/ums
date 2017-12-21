import {User} from '../interfaces/user';


export class UserService{

    users:Array<User>=[ //al posto di Array<User> si può inserire solo User[]
        {
            name: 'Giacomo1',
            surname: 'Delfini1',
            email: 'delfini1giacomo@gmail.com'
        },
        {
            name: 'Giacomo2',
            surname: 'Delfini2',
            email: 'delfini2giacomo@gmail.com'
        },
        {
            name: 'Giacomo3',
            surname: 'Delfini3',
            email: 'delfini3giacomo@gmail.com'
        },
        {
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
}