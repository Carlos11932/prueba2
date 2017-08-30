import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Show_Users } from './model/show_users';
import { UserService } from '../services/user.service'
import { User } from '../models/user'

@Component({
  selector: 'show-users-component',
  templateUrl: '/assets/views/show_users.component.html',
  providers: [UserService]
})
export class ShowUsersComponent {
  public title = 'show user!';
  public users: User[];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _UserService: UserService
  ){}

  ngOnInit(){
    this._UserService.getUsers().subscribe(
      result => {
        this.users = result;

        console.log(result)
        if(result.code != 200){
          console.log(result);
        }else{
        }
      },
      error => {
        var errorMessage = <any>error;
        console.log(errorMessage)
      }
    )
  }

}
