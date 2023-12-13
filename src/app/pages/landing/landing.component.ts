import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit{

  constructor(public componentApp:AppComponent){}


  ngOnInit(): void {
    
    this.componentApp.mostrarHeader = true;
  }



}
