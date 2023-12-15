import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-jugar',
  templateUrl: './jugar.component.html',
  styleUrls: ['./jugar.component.css']
})
export class JugarComponent implements OnInit{

  constructor(public componenteApp:AppComponent){}
  
  ngOnInit(): void {
    this.componenteApp.mostrarHeader = true;
  }

}
