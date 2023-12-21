import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user';
import { UsersService } from '../../shared/users.service';
import { Router } from '@angular/router';
import { Response } from 'src/app/models/response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  public user: User
  
  constructor(public componenteApp:AppComponent,
    private usersService: UsersService,
    private router: Router){
      this.user = new User ("","","","","");
    }
  
onSubmit(form:NgForm){

  this.usersService.login(this.user).subscribe(
    (resp: User) => {
    this.usersService.logueado = true;
    this.usersService.user = resp;
    console.log(resp);
    console.log(this.usersService.user);

    this.router.navigate(['/profile']);
  },
  (error) => {
    console.error('Error al iniciar sesion', error)
  }
  );
}



  ngOnInit(): void {
    
    this.componenteApp.mostrarHeader = true;
  }



}
