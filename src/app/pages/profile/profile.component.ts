import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/shared/users.service';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  public user:User = this.usersService.user;
  iduser: number = this.usersService.user.iduser;
  userData: any;
  porcentajeEnComponente: number = 0;
  nivelesData: any[] = [];
  nivelColores: { [title: string]: {fondo: string, borde: string, percentage: string, medalla: string } } = {
    'Introducción a Javascript': {fondo: '#FFFF00', borde: '#FFFF00', percentage: '#FFFF00', medalla: 'assets/images/nivel1_medalla.png'},
    'Variables y Tipos de Datos': {fondo: '#49e1f8', borde:'#49e1f8', percentage: '#49e1f8', medalla: 'assets/images/nivel2_medalla.png' },
    'Operadores y Expresiones': {fondo: '#ad0f5e', borde: '#ad0f5e', percentage: '#ad0f5e', medalla: 'assets/images/nivel3_medalla.png'},
    'Estructuras de Control': {fondo: '#d18e11', borde: '#d18e11', percentage: '#d18e11', medalla: 'assets/images/nivel4_medalla.png'},
    'Funciones': {fondo: '#d11111', borde:'#d11111', percentage: '#d11111', medalla: 'assets/images/nivel5_medalla.png'},
    'Arreglos y Objetos': {fondo: '#86fc8e', borde: '#86fc8e', percentage: '#86fc8e', medalla: 'assets/images/nivel5_medalla.png'},
    'DOM y Eventos': {fondo: '#500374', borde: '#500374', percentage: '#500374', medalla: 'assets/images/nivel5_medalla.png'},
    'AJAX y Promesas': {fondo: '#ce1ed7', borde:'#ce1ed7', percentage: '#ce1ed7', medalla: 'assets/images/nivel5_medalla.png'},
    'Programación Orientada a Objetos (OOP)': {fondo: '#def849', borde: '#def849', percentage: '#def849', medalla: 'assets/images/nivel5_medalla.png'},
  };
  porcentajeGlobal:number;

  constructor(public componentApp: AppComponent, 
              public router:Router,
              public usersService: UsersService,
              private cdr: ChangeDetectorRef
              )
              {
                this.user = this.usersService.user;
                this.actualizarPorcentaje();
                this.porcentajeEnComponente = 0;

              }

  ngOnInit(): void {
    this.componentApp.mostrarHeader = true;  
     const iduser = this.user.iduser;
     console.log(iduser)

     this.usersService.getAll(iduser).subscribe(
      (response: any) => {
        this.user = response.user[0];
        console.log('Datos del usuario después de la actualización:', this.user);
      },
      (error) => {
        console.error('Error al obtener datos del usuario después de la actualización:', error);
      }
    );


     this.usersService.getNivelesData(iduser).subscribe(
       (response: any) => {
         this.nivelesData = response;
         console.log(response)
       },
       (error) => {
         console.error('Error al obtener datos de niveles:', error);
       }
     );

       
    
 
    
  }

  modify(){
    this.router.navigate(["/mod-profile"]);
  }

  actualizarPorcentaje(){

      console.log(this.usersService.id_levelChallenges,this.usersService.idlevelsLevels,this.usersService.iduserUserLevel,
      this.usersService.idlevelUserLevel,);
    
      this.usersService.actualizarPorcentaje(
        this.usersService.iduserTheme,
        this.usersService.id_levelTheme,
        this.usersService.iduserChallenges,
        this.usersService.id_levelChallenges,
        this.usersService.idlevelsLevels,
        this.usersService.iduserUserLevel,
        this.usersService.idlevelUserLevel,
    
      ).subscribe((response: any) => {
        console.log('Éxito:', response);
        console.log('Datos en el servicio:', this.usersService)
        const percentage = response.porcentaje;
        if (percentage !== undefined) {
          this.porcentajeEnComponente = percentage;
          console.log(this.porcentajeEnComponente);
          console.log(percentage);
        } else {
          console.error('El porcentaje es undefined');
        }
    
      }, error => {
        console.error('Error', error);
      });
    }
  


}
