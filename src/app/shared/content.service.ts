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

  // public retosActivos: number[];

  constructor(private http: HttpClient, public userService: UsersService) {
    this.user = userService.user;
  }

  

  public getContentPlay(iduser:number, id_level: number): Observable<Object> {
    console.log(iduser);
    console.log(id_level);
    
    
    return this.http.get(`${this.url}/retos?iduser=${iduser}&id_level=${id_level}`);
  }

  public getActiveRetos(iduser:number):Observable<Object>{

    return this.http.get(`${this.url}/retos/active?iduser=${iduser}`);
  }

  public updateSingleCompleted(iduser:number, idchallenge: number):Observable<Object>{

    return this.http.post(`${this.url}/retos/mark_retos_completed?iduser=${iduser}&idchallenge=${idchallenge}`, null);
  }

  public updateRetoActivate(iduser:number, idchallenge: number):Observable<Object>{

    return this.http.post(`${this.url}/retos/mark_reto_tema_completed?iduser=${iduser}&idchallenge=${idchallenge}`, null);
  }
}
