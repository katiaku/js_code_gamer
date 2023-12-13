import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{


  constructor(public router:Router, public componenteApp:AppComponent){}


  ngOnInit(): void {
    this.componenteApp.mostrarHeader = false;
  }

  start(){
    this.router.navigate(['/landing']);
  }
}
