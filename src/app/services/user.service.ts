import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';
import { GLOBAL } from './global'

@Injectable()
export class UserService {
  public url: string;
  public showAllUrl: string;
  public removeUserUrl: string;
  public createUserUrl: string;
  public updateUserUrl: string;
  public showUserUrl: string;


  constructor(public _http:Http){
    this.url = GLOBAL.userUrl;


  }

  getPrueba(){
    return 'hola'
  }

  getUserDetails(id){
    return this._http.get(this.url+'get/'+id).map(res => res.json());
  }

  getUsers(){
    return this._http.get(this.url+'getall').map(res => res.json());
  }

  addUser(user: User){
    let json = JSON.stringify(user);
    let params = 'json='+json;
    let headers = new Headers({'Content-Type':'application/json'});


    return this._http.post(this.url+'create', params, {headers: headers}).map(res => res.json());
  }

  editUser(id, user: User){
    let json = JSON.stringify(user);
    let params = 'json'+json;
    let headers = new Headers({'Content-Type':'application/json'});

    return this._http.post(this.url+'update/'+id, params, {headers: headers}).map(res => res.json());
  }

  deleteUser(id){
    return this._http.get(this.url+'remove/'+id);
  }
}
