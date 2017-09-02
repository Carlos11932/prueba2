import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service'
import { User } from '../../models/user'

@Component({
  selector: 'show-users-component',
  templateUrl: '/assets/views/show_users.component.html',
  providers: [UserService]
})
export class ShowUsersComponent {
  public title = 'show user!';
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

  getAllUsers(){
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

  deleteConfirmed(id){
    this.confirmed = id;
  }

  cancelConfirmed(){
    this.confirmed = null;
  }

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
