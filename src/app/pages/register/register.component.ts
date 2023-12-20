import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { UsersService } from 'src/app/shared/users.service';
import { Response } from 'src/app/models/response';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  public registerForm: FormGroup;

  constructor(public componentApp:AppComponent,
    private formBuilder: FormBuilder,
    private apiService: UsersService,
    private toast: ToastrService){
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
          this.toast.success('Usuario creado satisfactoriamente', '', { positionClass: 'toastPosition' });
          this.registerForm.reset();
        } else {
          this.toast.error('Hubo un problema al registrar al usuario', '', { positionClass: 'toastPosition' });
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
