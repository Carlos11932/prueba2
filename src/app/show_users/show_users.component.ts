import { Component } from '@angular/core';
import { Show_Users } from './model/show_users';
import { QueryService } from '../services/querys.service'

@Component({
  selector: 'show-users-component',
  templateUrl: '/assets/views/show_users.component.html',
  providers: [QueryService]
})
export class ShowUsersComponent {
  title = 'show user!';
  public users;

  constructor(
    private _queryService: QueryService
  ){}

  ngOnInit(){
    this._queryService.getUsers().subscribe(
      result => {
        console.log(result)
        this.users = result;
        if(!this.users){
          console.log('sin usuarios')
        }
      },
      error => {
        var errorMessage = <any>error;
        console.log(errorMessage)
      }
    )
  }

}
