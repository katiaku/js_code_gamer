import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user';
import { UsersService } from '../../shared/users.service';
import { Router } from '@angular/router';
import { Response } from 'src/app/models/response';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  public user: User
  public loginError: string = '';

  constructor(public componenteApp:AppComponent,
    private usersService: UsersService,
    private router: Router){
      this.user = new User (0,"","","","","");
    }

onSubmit(form:NgForm){

  this.usersService.login(this.user).subscribe(
    (resp: any) => {
    // this.usersService.logueado = true;
    this.usersService.setLoggedIn(true);
    this.usersService.user = resp;
    console.log(resp);
    console.log(this.usersService.user);

    this.router.navigate(['/profile']);
  },
  (error: HttpErrorResponse) => {
    if (error.status === 401) {
      this.loginError = 'Correo o contraseña incorrectos.';
    } else {
      this.loginError = `Error al iniciar sesión: ${error.statusText}`;
    }
  }
);
}




  ngOnInit(): void {

    this.componenteApp.mostrarHeader = true;
  }



}
