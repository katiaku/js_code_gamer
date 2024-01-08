import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url: string = "http://localhost:3000";
  private loggedInSubject = new BehaviorSubject<boolean>(false);

  public user: User;
  public percentage: number;
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
        
        this.iduserTheme = response.user_theme_iduser; 
        this.id_levelTheme = response.theme_id_level; 
        this.iduserChallenges = response.user_challenges_iduser; 
        this.id_levelChallenges = response.challenge_id_level; 
        this.idlevelsLevels = response.idlevels; 
        this.iduserUserLevel = response.user_level_iduser; 
        this.idlevelUserLevel = response.user_level_idlevel;
      })
    );
  }

  public logout(): Observable<boolean> {
    return this.http.post<boolean>(`${this.url}/logout`, {}).pipe(
      tap(() => {
        this.setLoggedIn(false);
        this.user = null;
      })
    );
  }

  public actualizarPorcentaje(iduserTheme: number, id_levelTheme: number, iduserChallenges: number, id_levelChallenges: number, idlevelsLevels: number, iduserUserLevel: number, idlevelUserLevel: number): Observable<any> {

    console.log('Parámetros:', iduserTheme, id_levelTheme, iduserChallenges, id_levelChallenges, idlevelsLevels, iduserUserLevel, idlevelUserLevel)

    const url = `${this.url}/actualizarPorcentaje`;
   
    let body = {iduserTheme,id_levelTheme,iduserChallenges,id_levelChallenges,idlevelsLevels,iduserUserLevel,idlevelUserLevel}

    console.log(url);
    console.log(body);
    
    
    return this.http.post(url, body).pipe(
      map((response: any) => {
        console.log('Respuesta del servidor:', response);
        return { ...response, porcentaje: response.porcentaje || 0 };
      })
    );
}

getNivelesData(iduser: number): Observable<any> {
  const url = `${this.url}/obtenerDatosNiveles/${iduser}`;
  return this.http.get(url);
}

updateUser(user:User): Observable<any> {
  const url = `${this.url}/usuario`; // Usa la misma ruta '/usuario'
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  return this.http.put(url, user, { headers });
}



}


 
