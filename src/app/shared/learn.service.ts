import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Themes } from '../models/themes';

@Injectable({
  providedIn: 'root'
})
export class LearnService {

  themes: Themes[];

  id_level: number;

  private url = "http://localhost:3000/themes";

  constructor(private http: HttpClient) { }

  public getAll(iduser: number, id_level: number): Observable<Object> {
    return this.http.get(`${this.url}?iduser=${iduser}&id_level=${id_level}`);
  }

}
