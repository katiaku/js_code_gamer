import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersService } from './users.service';
import { Content } from '../models/content';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private url: string = "http://localhost:3000";

  public user: User;

  public nivel: number;

  public content: Content[];

  constructor(private http: HttpClient, public userService: UsersService) {
    this.user = userService.user;
  }

  public getContentPlay( id_level: number): Observable<Object> {
    return this.http.get(`${this.url}/retos?id_level= ${id_level}` );
  }
}
