import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  constructor(public componentApp:AppComponent){
    
  }
  ngOnInit(): void {
    this.componentApp.mostrarHeader = true;
  }


  onSubmit(){
    
  }
}
