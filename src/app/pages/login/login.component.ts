import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  constructor(public componenteApp:AppComponent){

  }
  

  ngOnInit(): void {
    
    this.componenteApp.mostrarHeader = true;
  }



}
