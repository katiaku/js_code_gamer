import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-niveles-learn',
  templateUrl: './niveles-learn.component.html',
  styleUrls: ['./niveles-learn.component.css']
})
export class NivelesLearnComponent implements OnInit{

  unlockedLevel: number = 1;
  porcentajeEnComponente = 0;

  constructor(public componenteApp:AppComponent,
    public usersService: UsersService){
      
    }

  ngOnInit(): void {
    this.componenteApp.mostrarHeader = true;
    this.actualizarPorcentaje();
  }

  isLevelUnlocked(level: number): boolean {
    return level <= this.unlockedLevel;
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
      for(let i=0; i<response.result.length; i++){
        if (response.result[i].percentage === 100) {
          this.unlockedLevel++;
        }
      }

    }, error => {
      console.error('Error', error);
    });
  }

}
