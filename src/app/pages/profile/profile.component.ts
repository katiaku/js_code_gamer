import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  public user:User;
  constructor(public componentApp: AppComponent, 
              public router:Router,
              public usersService: UsersService)
              {
                this.user=this.usersService.user;
              }

  ngOnInit(): void {
    this.componentApp.mostrarHeader = true;
  }

  modify(){
    this.router.navigate(["/mod-profile"]);
  }

}
