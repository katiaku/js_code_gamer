import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { IdLevel } from 'src/app/models/id-level';
import { ContentService } from 'src/app/shared/content.service';
import { LearnService } from 'src/app/shared/learn.service';
import { Respuesta } from 'src/app/shared/respuesta';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-jugar',
  templateUrl: './jugar.component.html',
  styleUrls: ['./jugar.component.css']
})
export class JugarComponent implements OnInit{

  nivelActual: number;
  

  public retosActivos: IdLevel[];

  constructor(
    public componenteApp:AppComponent,
    public apiService:LearnService,
    public contentService: ContentService,
    public userService: UsersService){}

    ngOnInit(): void {
      this.componenteApp.mostrarHeader = true;
      this.nivelActual = this.apiService.id_level;
    
      this.contentService.getActiveRetos(this.userService.user.iduser).subscribe((respuesta: Respuesta) => {
        if (respuesta.error) {
          console.log(respuesta.message);
        } else {
          this.retosActivos = respuesta.data;
          // console.log(respuesta.data);
    
          if (this.retosActivos) {
            // Iterar sobre retosActivos solo si está definido
            for (let i = 0; i < this.retosActivos.length; i++) {
              // Verificar si la propiedad 'activo' está definida antes de asignarle un valor
              if (this.retosActivos[i] && this.retosActivos[i].hasOwnProperty('activo')) {
                this.retosActivos[i].activo = false;
              }
            }
          }
        }
      });
    }

  changeLevel(level: number): void {
    this.comprobarReto(level);
  }

  comprobarReto(numReto:number): void{

    let encontrado = false;
    if (!this.retosActivos.some(reto => reto.id_level === numReto)) {
      // numReto no existe, salir del bucle
      console.log('numReto no existe en this.retosActivos');
      encontrado = true;
      return;
    }
    for(let i=0; i < this.retosActivos.length; i++){
      // console.log(numReto);
      // console.log(this.retosActivos[i].id_level);
      
      
      if(this.retosActivos[i].id_level === numReto){
        this.retosActivos[i].activo  = true;
        encontrado = true;
        break;
        
      }else{
        this.retosActivos[i].activo = false;

      }
    }
    if (encontrado) {
      for (let i = 0; i < this.retosActivos.length; i++) {
        if (this.retosActivos[i].id_level !== numReto) {
          this.retosActivos[i].activo = false;
        }
      }
    } else {
      console.log('numReto no encontrado en this.retosActivos');
    }
  }

}
