import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'create-user-component',
  templateUrl: '/assets/views/create_user.component.html',
  providers: [UserService]
})
export class CreateUserComponent {
  public title: string;
  public user: User;

  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router
  ){
    this.title = 'create user!';
    this.user = new User(0, '', '');
  }

  ngOnInit(){}

  onSubmit(){
    console.log(this.user)
    // this._userService.addUser(this.user).subscribe(
    /** response => {
          this._router.navigate([/home])
        }error => {
        console.log(<any>error);
      }
      )*/
  }

}
