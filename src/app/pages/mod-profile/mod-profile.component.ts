import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/shared/users.service';
import { Router } from '@angular/router';
import { Response } from 'src/app/models/response';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-mod-profile',
  templateUrl: './mod-profile.component.html',
  styleUrls: ['./mod-profile.component.css']
})
export class ModProfileComponent implements OnInit{

  user: User;
  profileForm: FormGroup;
  iduser:number;
  name_surname: string; 
  email: string; 
  username: string; 
  photo:string; 
  password: string;

  constructor(public componentApp:AppComponent,
              private userService: UsersService,
              private router: Router,
              private toastr: ToastrService,
              private formBuilder: FormBuilder,
              ){
                this.profileForm = this.formBuilder.group({
                  name_surname: [''],
                  email: [''],
                  username: [''],
                  photo: [''],
                  password: ['', [Validators.minLength(8)]],
                  confirmPassword: ['']
                }, { validators: this.passwordMatchValidator });
              }
 


              passwordMatchValidator(formGroup: FormGroup) {
                const password = formGroup.get('password').value;
                const confirmPassword = formGroup.get('confirmPassword').value;
            
                if (password === confirmPassword) {
                  return null; 
                  return { passwordMismatch: true }; 
                }
              }


  actualizarUsuario(){
    const iduser = this.userService.user.iduser; 
    if (iduser) {
      const formData = { ...this.profileForm.value, iduser }; 
    
    this.userService.updateUser(formData).subscribe(
      (resp: Response) => {
        if (!resp.error) {
          this.toastr.success(resp.mensaje);
          this.router.navigate(['/profile']);
        } else {
          this.toastr.error(resp.mensaje);
        }
      }
    );
  }}



  ngOnInit(): void {
    this.componentApp.mostrarHeader = true;

  }


}












