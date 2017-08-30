import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'edit-user-component',
  templateUrl: '/assets/views/edit_user.component.html',
  providers: [UserService]
})
export class EditUserComponent {
  public title: string;
  public user: User;
  public is_edit;

  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router
  ){
    this.title = 'edit user!';
    this.user = new User(0, '', '');
    this.is_edit = false;
  }

  ngOnInit(){
    this.showUser()
  }

  onSubmit(){
    console.log(this.user)
    this.updateUser();
    // this._userService.editUser(this.user).subscribe(
    /** response => {
          this._router.navigate([/home])
        }error => {
        console.log(<any>error);
      }
      )*/
  }

  updateUser(){
    this._route.params.forEach((params:Params) => {
      let id = params['id'];
      this._userService.editUser(id, this.user).subscribe(
      response => {
            this._router.navigate(['/show_user_details/'+id])
          },
          error => {
          console.log(<any>error);
        });
      });
  };

  showUser(){
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

      });
  }

}
