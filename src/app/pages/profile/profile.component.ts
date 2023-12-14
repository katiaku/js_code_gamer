import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{


  constructor(public componentApp: AppComponent, public router:Router){}

  ngOnInit(): void {
    this.componentApp.mostrarHeader = true;
  }

  modify(){
    this.router.navigate(["/mod-profile"]);
  }

}
