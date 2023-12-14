import {  Component, OnInit} from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro-nivel',
  templateUrl: './intro-nivel.component.html',
  styleUrls: ['./intro-nivel.component.css']
})
export class IntroNivelComponent implements OnInit{

buttonDisplay: string = 'none'; // Inicialmente, el botón está oculto
buttonDisabled: boolean = true; // Inicialmente, el botón está deshabilitado


  constructor(public componentApp:AppComponent,
              private router: Router){}


ngOnInit(): void {
  this.componentApp.mostrarHeader = false;

  // Después de 10 segundos, muestra y habilita el botón
  setTimeout(() => {
    this.buttonDisplay = 'block';
    this.buttonDisabled = false;
  }, 11000);
}

iniciarJuego() {
  this.router.navigate(['/']);
}
}