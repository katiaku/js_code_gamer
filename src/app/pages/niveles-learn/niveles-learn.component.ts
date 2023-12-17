import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-niveles-learn',
  templateUrl: './niveles-learn.component.html',
  styleUrls: ['./niveles-learn.component.css']
})
export class NivelesLearnComponent implements OnInit{


  constructor(public componenteApp:AppComponent){}
  
  ngOnInit(): void {
    this.componenteApp.mostrarHeader = true;
  }

}
