import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user';
import { GLOBAL } from './global'

@Injectable()
export class UserService {
  public url: string;

  constructor(public _http:Http){
    this.url = GLOBAL.userUrl;
  }

  //call innocv api and get user info based on his id
  //expect id:integer, method: get
  //use GLOBAL to define the api url + get/ +id
  //returns the response, expecting an user with name:string, birthdate:date and id:int
  getUserDetails(id){
    return this._http.get(this.url+'get/'+id).map(res => res.json());
  }

  //call innocv api and get users info as an array
  //dont expect params, method get
  //use GLOBAL to define the api url + getall
  //returns the response, expecting an array of users with name:string, birthdate:date and id:int
  getUsers(){
    return this._http.get(this.url+'getall').map(res => res.json());
  }

  //call innocv api to create a new user
  //need an user.name and user.birthdate as params, method post
  //use GLOBAL to define the api url + create
  //returns the new user with generated id
  addUser(user: User){
    let json = JSON.stringify(user);
    let params = 'json='+json;
    let headers = new Headers({'Content-Type':'application/json'});
    return this._http.post(this.url+'create', params, {headers: headers}).map(res => res.json());
  }

  //call innocv api to edit an user based on his id
  //need an user.name and user.birthdate as params, method post
  //use GLOBAL to define the api url + update/ + id
  //returns the edited user
  editUser(id, user: User){
    let json = JSON.stringify(user);
    let params = 'json'+json;
    let headers = new Headers({'Content-Type':'application/json'});
    return this._http.post(this.url+'update/'+id, params, {headers: headers}).map(res => res.json());
  }

  //call innocv api to delete an user based on his id
  //need user id:integer as param. method get
  //use GLOBAL to define the api url + remove/ + id
  //returns <void>
  deleteUser(id){
    return this._http.get(this.url+'remove/'+id);
  }
}
