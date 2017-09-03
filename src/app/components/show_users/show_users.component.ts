import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

//import service for http querys to innocv api
import { UserService } from '../../services/user.service'

//import user model
import { User } from '../../models/user'

@Component({
  selector: 'show-users-component',
  templateUrl: '/assets/views/show_users.component.html',
  styleUrls: ['./assets/styles/show_users.style.css'],
  providers: [UserService]
})
export class ShowUsersComponent {
  public users: User[];
  public confirmed;


  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _UserService: UserService
  ){}

  ngOnInit(){
    this.getAllUsers()
  }

//load the page with all the users from innocv api or log the error
  getAllUsers(){
    this._UserService.getUsers().subscribe(
      result => {
        this.users = result;
      },
      error => {
        var errorMessage = <any>error;
        console.log(errorMessage)
      }
    )
  }

//function to let the user confirm or cancel the delete of the selected User.
//expect the user.id as param
//change the confirmed status from nil to some user id
  deleteConfirmed(id){
    this.confirmed = id;
  }

//function to abort the delete of the selected user
//dont expect params
//change the confirmed status to null
  cancelConfirmed(){
    this.confirmed = null;
  }

//function to call the delete function from the user service
//expect user id as param.
//delete the seleceted user from the user array or log the error
  onDeleteUser(id){
    this._UserService.deleteUser(id).subscribe(
      response => {
        this._router.navigate(['/show_users'])
      },
      error => {
        console.log(<any>error)
      }
    )
  }

}
