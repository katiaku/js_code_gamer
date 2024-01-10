import { Component, OnInit} from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ActivatedRoute, Router } from '@angular/router';
import { LearnService } from 'src/app/shared/learn.service';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-intro-nivel',
  templateUrl: './intro-nivel.component.html',
  styleUrls: ['./intro-nivel.component.css']
})
export class IntroNivelComponent implements OnInit{

  buttonDisplay: string = 'none'; // Inicialmente, el botón está oculto
  buttonDisabled: boolean = true; // Inicialmente, el botón está deshabilitado

  constructor(public componentApp:AppComponent,
              public apiService: LearnService,
              public apiServiceUsers: UsersService,
              private route: ActivatedRoute,
              private router: Router){
    this.apiService.themes = null;
  }

  ngOnInit(): void {
    console.log("User ID: " + this.apiServiceUsers.user.iduser);

    this.componentApp.mostrarHeader = false;

    this.route.params.subscribe(params => {
      console.log("Params: ", params);

      const id_level = params['id-level'];
      console.log("id_level: ", id_level);

      if (id_level !== undefined) {
        this.apiService.id_level = id_level;
        console.log("Level ID: " + this.apiService.id_level);
        this.loadContent();
      } else {
        console.error('id_level is undefined in route parameters.');
      }

    });

    // Después de 10 segundos, muestra y habilita el botón
    setTimeout(() => {
      this.buttonDisplay = 'block';
      this.buttonDisabled = false;
    }, 11000);
  }


  loadContent(): void {
    this.showThemes(this.apiServiceUsers.user.iduser, this.apiService.id_level);
    
  }

  showThemes(iduser: number, id_level: number) {
    this.apiService.getAll(iduser, id_level).subscribe((resp: any) => {
      console.log(resp);
      this.apiService.themes = resp;
    });
  }

  iniciarJuego() {
    this.router.navigate(['/retos', this.apiService.id_level]);
  }
}
