import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url: string = "http://localhost:3000";
  private loggedInSubject = new BehaviorSubject<boolean>(false);

  public user: User;
  iduserTheme: number;
  id_levelTheme: number;
  iduserChallenges: number;
  id_levelChallenges: number;
  idlevelsLevels: number;
  iduserUserLevel: number;
  idlevelUserLevel: number;

  // public logueado: boolean = false;

  constructor(private http: HttpClient) {}

  public register(user: User): Observable<Object> {
    return this.http.post(`${this.url}/register`, user);
  }

  get loggedIn(): Observable<boolean> {
    return this.loggedInSubject.asObservable();
  }

  setLoggedIn(value: boolean) {
    this.loggedInSubject.next(value);
  }

  public login(user: User): Observable<any> {
    return this.http.post(`${this.url}/login`, user)
    .pipe(
      tap((response: any) => {
        console.log('Respuesta del servicio al iniciar sesión:', response);
        this.iduserTheme = response.themes_id_level; 
        this.id_levelTheme = response.themes_id_level; 
        this.iduserChallenges = response.user_challenges_iduser; 
        this.id_levelChallenges = response.challenges_id_level; 
        this.idlevelsLevels = response.levels_idlevels; 
        this.iduserUserLevel = response.user_level_iduser; 
        this.idlevelUserLevel = response.user_level_idlevel;
   
      })
    );
  }

  public actualizarPorcentaje(iduserTheme: number, id_levelTheme: number, iduserChallenges: number, id_levelChallenges: number, idlevelsLevels: number, iduserUserLevel: number, idlevelUserLevel: number): Observable<any> {
    console.log('Parámetros:', iduserTheme, id_levelTheme, iduserChallenges, id_levelChallenges, idlevelsLevels, iduserUserLevel, idlevelUserLevel)
    const url = `${this.url}/actualizarPorcentaje/${iduserTheme}/${id_levelTheme}/${iduserChallenges}/${id_levelChallenges}/${idlevelsLevels}/${iduserUserLevel}/${idlevelUserLevel}`;
    return this.http.post(url, null);
}
}













// this.iduserTheme = response.theme_id_level;  //id usuario donde se encuentra segun relacion, nivel - tema
// this.id_levelTheme = response.theme_id_level; // id nivel del tema-subtema
// this.iduserChallenges = response.user_challenges_iduser; //id usuario donde se encuentra segun relacion, nivel - retos
// this.id_levelChallenges = response.challenge_id_level; // id nivel del reto-subreto
// this.idlevelsLevels = response.idlevel; // banda de % (100*100) segun cantidad de temas y retos
// this.iduserUserLevel = response.user_level_iduser; //id usuario donde se encuentra segun relacion - niveles
// this.idlevelUserLevel = response.idlevel;   //define mi nivel donde estoy, donde calculare el %    
