import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable'

@Injectable()
export class QueryService {
  public showAllUrl: string;
  public removeUserUrl: string;
  public createUserUrl: string;
  public updateUserUrl: string;
  public showUserUrl: string;


  constructor(private _http:Http){
    this.showAllUrl = 'http://hello-world.innocv.com/api/user/getall',
    this.createUserUrl = 'http://hello-world.innocv.com/api/user/create',
    this.updateUserUrl = 'http://hello-world.innocv.com/api/user/update',
    this.removeUserUrl = 'http://hello-world.innocv.com/api/user/remove',
    this.showUserUrl = 'http://hello-world.innocv.com/api/user/get/:id'


  }

  getPrueba(){
    return 'hola'
  }

  getUsers(){
    return this._http.get(this.showAllUrl).map(res => res.json())
  }
}
