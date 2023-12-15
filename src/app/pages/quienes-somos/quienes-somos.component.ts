import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.css']
})
export class QuienesSomosComponent implements OnInit{

  constructor(public componenteApp:AppComponent){}
  
  ngOnInit(): void {
    this.componenteApp.mostrarHeader = true;
  }


}
