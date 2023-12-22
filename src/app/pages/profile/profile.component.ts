import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  public user:User;


  constructor(public componentApp: AppComponent, 
              public router:Router,
              public usersService: UsersService)
              {
                this.user=this.usersService.user;
                this.actualizarPorcentaje()
              }

  ngOnInit(): void {
    this.componentApp.mostrarHeader = true;  
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
      ).subscribe((response: Response) => {
        console.log('Éxito:', response);
      }, error => {
        console.error('Error', error);
      });
    }
  

}
