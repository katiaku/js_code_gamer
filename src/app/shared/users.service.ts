import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url: string = "http://localhost:3000";

  public user: User;

  // public logueado: boolean = false;

  constructor(private http: HttpClient) {}

  public register(user: User): Observable<Object> {
    return this.http.post(`${this.url}/register`, user);
  }

  public login(user: User): Observable<object> {
    return this.http.post(`${this.url}/login`, user);
  }

}
