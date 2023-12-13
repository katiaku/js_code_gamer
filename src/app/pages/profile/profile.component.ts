import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{


  constructor(public componentApp: AppComponent){}

  ngOnInit(): void {
    this.componentApp.mostrarHeader = true;
  }

}
