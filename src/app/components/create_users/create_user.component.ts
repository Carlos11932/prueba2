import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

//import service for http querys to innocv api
import { UserService } from '../../services/user.service';

//import user model
import { User } from '../../models/user';

@Component({
  selector: 'create-user-component',
  templateUrl: '/assets/views/create_user.component.html',
  styleUrls: ['./assets/styles/create_user.style.css'],
  providers: [UserService]
})
export class CreateUserComponent {
  public user: User;
  public userToCreate: any;

constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router
  ){
    this.setUserEmpty();
    this.userToCreate = {id: 0, name: '', birthdate: {}};

  }
ngOnInit(){}

//call the user service to create a new user on submit action
//the call to user service expect an user object completed on the view
//redirect to /show_users after create him or log the error
onSubmit(){
    this.setUserWithDate();
    this._userService.addUser(this.user).subscribe(
      response => {
        this._router.navigate(['/show_users']);
      },
      error => {
        console.log(<any>error);
      }
    )
  }

  //set the imputs to ""
setUserEmpty(){
    this.user = new User(0, '', null);
  }
//function to format user birthdate in a properly date format.
//get data from the 3 date imputs, then use it to create the new user
setUserWithDate(){
  let stringDate = this.userToCreate.birthdate.year + '-' + this.userToCreate.birthdate.month + '-' + this.userToCreate.birthdate.date;
  let formatDate = new Date(stringDate);
  this.user = new User(0, this.userToCreate.name, formatDate);
  }
}
