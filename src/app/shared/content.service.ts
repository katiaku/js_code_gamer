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

  public activate: number;

  constructor(private http: HttpClient, public userService: UsersService) {
    this.user = userService.user;
  }

  

  public getContentPlay(iduser:number, id_level: number): Observable<Object> {
    console.log(iduser);
    console.log(id_level);
    
    
    return this.http.get(`${this.url}/retos?iduser= ${iduser}&id_level=${id_level}&activate=1` );
  }
}
