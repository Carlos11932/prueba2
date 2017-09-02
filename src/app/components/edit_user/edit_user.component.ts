import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
@Component({
  selector: 'edit-user-component',
  templateUrl: '/assets/views/edit_user.component.html',
  styleUrls: ['./assets/styles/edit_user.style.css'],
  providers: [UserService]
})
export class EditUserComponent {
  public title: string;
  public userToEdit: any;
  private user: User;
  public is_edit;
constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router
  ){
    this.title = 'edit user!';
    this.user = new User(0, '', null);
    this.userToEdit = {id: 0, name: '', birthdate: {}};
    this.is_edit = false;
  }
ngOnInit(){
    this.showUser()
  }
onSubmit(){
    let stringDate = this.userToEdit.birthdate.year + '-' + this.userToEdit.birthdate.month + '-' + this.userToEdit.birthdate.date;
    let formatDate = new Date(stringDate);
    if(!formatDate){
      return;
    }
    this.user = new User(0, this.userToEdit.name, formatDate);
    this.updateUser();
  }
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
showUser(){
    this._route.params.forEach((params:Params) => {
      let id = params['id'];
this._userService.getUserDetails(id).subscribe(
        response => {
          console.log(response)
          this.user = new User(response.id, response.name, new Date(response.birthdate));
          this.setUserToEdit();
        },
        error => {
          console.log(<any>error);
          this._router.navigate(['/home'])
        });
});
  }
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
