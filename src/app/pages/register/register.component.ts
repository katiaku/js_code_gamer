import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { UsersService } from 'src/app/shared/users.service';
import { Response } from 'src/app/models/response';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  public registerForm: FormGroup;

  constructor(public componentApp:AppComponent,
    private formBuilder: FormBuilder,
    private apiService: UsersService){
      this.buildForm();
  }

  ngOnInit(): void {
    this.componentApp.mostrarHeader = true;
  }

  public register() {
    const user = this.registerForm.value;
    console.log(user);

    this.apiService.register(user).subscribe((resp: Response) => {
      console.log(resp);
        if (!resp.error) {
          alert('Usuario creado satisfactoriamente');
          this.registerForm.reset();
        } else {
          alert('Hubo un problema al registrar al usuario.');
        }
    });
  }

  private buildForm() {
    const minPasswordLength = 8;
    this.registerForm = this.formBuilder.group({
      name_surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      photo: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(minPasswordLength)]],
      confirmPassword: ['', [Validators.required, this.checkPasswords]]
    });
  }

  private checkPasswords(control: AbstractControl) {
    let resultado = { matchPassword: true };
    if (control.parent?.value.password === control.value) {
      resultado = null;
    }
    return resultado;
  }
}
