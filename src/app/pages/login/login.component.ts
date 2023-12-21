import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user';
import { UsersService } from '../../shared/users.service';
import { Router } from '@angular/router';

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
  
onSubmit(loginForm:NgForm){

  // this.usersService.login(loginForm.value).subscribe(response) => {
  //   this.usersService.logueado = true;
  //   this.usersService.user = response;
  //   console.log(response);
  //   console.log(this.usersService.user);

  //   this.router.navigate(['/profile']);
  // },
  // (error) => {
  //   console.error('Error al iniciar sesion', error)
  // }
}



  ngOnInit(): void {
    
    this.componenteApp.mostrarHeader = true;
  }



}
