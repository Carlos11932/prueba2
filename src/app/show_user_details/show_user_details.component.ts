import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'show-user-details-component',
  templateUrl: '/assets/views/show_user_details.component.html',
  providers: [UserService]
})
export class ShowUserDetailsComponent {
  public title: string;
  public user: User;

  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router
  ){
    this.title = 'show user!';

  }

  ngOnInit(){
    this.getUser();
  }

  getUser(){
    this._route.params.forEach((params:Params) => {
      let id = params['id'];

      this._userService.getUserDetails(id).subscribe(
        response => {
          console.log(response)
          this.user = response
        },
        error => {
          console.log(<any>error);
          this._router.navigate(['/home'])
        });

      })
  }
}
