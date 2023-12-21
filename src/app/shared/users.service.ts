import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url: string = "http://localhost:3000";
  // private loggedInSubject = new BehaviorSubject<boolean>(false);

  public user: User;

  constructor(private http: HttpClient) {}

  public register(user: User): Observable<Object> {
    return this.http.post(`${this.url}/register`, user);
  }

  // get loggedIn(): Observable<boolean> {
  //   return this.loggedInSubject.asObservable();
  // }

  // setLoggedIn(value: boolean) {
  //   this.loggedInSubject.next(value);
  // }

}
