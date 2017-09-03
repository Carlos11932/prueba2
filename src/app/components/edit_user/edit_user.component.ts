import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

//import service for http querys to innocv api
import { UserService } from '../../services/user.service';

//import user model
import { User } from '../../models/user';

@Component({
  selector: 'edit-user-component',
  templateUrl: '/assets/views/edit_user.component.html',
  styleUrls: ['./assets/styles/edit_user.style.css'],
  providers: [UserService]
})
export class EditUserComponent {
  public userToEdit: any;
  private user: User;
  public is_edit;
constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router
  ){
    this.user = new User(0, '', null);
    this.userToEdit = {id: 0, name: '', birthdate: {}};
    this.is_edit = false;
  }
ngOnInit(){
    this.showUser()
  }

  //get the date from the imputs as string and format to Date
  //if user birthdat is correctly formatted create a new instace of him and call updateUser
onSubmit(){
    let stringDate = this.userToEdit.birthdate.year + '-' + this.userToEdit.birthdate.month + '-' + this.userToEdit.birthdate.date;
    let formatDate = new Date(stringDate);
    if(!formatDate){
      return;
    }
    this.user = new User(0, this.userToEdit.name, formatDate);
    this.updateUser();
  }

  //function to edit the selected user calling the user service.
  //expect id as param to call the user service
  //redirect to selected user view after edit or log the error
updateUser(){
    this._route.params.forEach((params:Params) => {
      let id = params['id'];
      this._userService.editUser(id, this.userToEdit).subscribe(
      response => {
            this._router.navigate(['/show_user_details/'+id])
          },
          error => {
          console.log(<any>error);
        });
      });
  };

  //function to show the view of the user to edit
  //expect an user id to charge his view
  //save an user instance with his attributes before edit or log the error and redirect to home
showUser(){
    this._route.params.forEach((params:Params) => {
      let id = params['id'];
      this._userService.getUserDetails(id).subscribe(
        response => {
          this.user = new User(response.id, response.name, new Date(response.birthdate));
          this.setUserToEdit();
        },
        error => {
          console.log(<any>error);
          this._router.navigate(['/home'])
        });
      });
  }

  //save the user attributes before be edited in a new instance
  //used to restablish the server data of the user.
setUserToEdit(){
    this.userToEdit = {
      id: this.user.id,
      name: this.user.name,
      birthdate: {
        date: this.user.birthdate.getDate(),
        month: this.user.birthdate.getMonth() + 1,
        year: this.user.birthdate.getFullYear()
      }
    };
  }
}
