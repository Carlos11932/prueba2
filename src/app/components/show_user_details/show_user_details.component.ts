import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

//import service for http querys to innocv api
import { UserService } from '../../services/user.service';

//import user model
import { User } from '../../models/user';

@Component({
  selector: 'show-user-details-component',
  templateUrl: '/assets/views/show_user_details.component.html',
  styleUrls: ['./assets/styles/show_user_details.style.css'],
  providers: [UserService]
})
export class ShowUserDetailsComponent {
  public user: User;

  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router
  ){

  }

  ngOnInit(){
    this.getUser();
  }

//get the selected user and show it in his views
//call the user service to get the user
//expect an id as params
//returns the selected user or log the error and redirect to Home
  getUser(){
    this._route.params.forEach((params:Params) => {
      let id = params['id'];

      this._userService.getUserDetails(id).subscribe(
        response => {
          this.user = response
        },
        error => {
          console.log(<any>error);
          this._router.navigate(['/home'])
        });

      })
  }
}
