import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-mod-profile',
  templateUrl: './mod-profile.component.html',
  styleUrls: ['./mod-profile.component.css']
})
export class ModProfileComponent implements OnInit{

  constructor(public componentApp:AppComponent){
    
  }
  ngOnInit(): void {
    this.componentApp.mostrarHeader = true;
  }


  onSubmit(){
    
  }
}
