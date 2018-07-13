import { Component, OnInit } from '@angular/core';
import { User } from '../classes/user';
import { UserService } from '../services/user.service';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  public user:User;
  public title="User Detail";
  //nel costruttore vanno i providers
  constructor(private userService:UserService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {

    this.user=new User();
   
    this.route.paramMap.subscribe(
      /*(params) => {
        this.user= this.userService.getUser(+params.id);
      }*/
      (params)=> { //lóggetto che viene passato alla closure proviene da paramMap
        this.userService.getUser(+params.get('id')).subscribe(
          response => this.user = response['data']
        );
      }
    );
  }

  backToUsers(){
    this.router.navigate(['users']);
  }

}
