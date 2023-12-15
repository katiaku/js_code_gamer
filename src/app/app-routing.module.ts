import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { RegisterComponent } from './pages/register/register.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { LearnComponent } from './pages/learn/learn.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NivelesLearnComponent } from './pages/niveles-learn/niveles-learn.component';
import { ModProfileComponent } from './pages/mod-profile/mod-profile.component';
import { RetosComponent } from './pages/retos/retos.component';

const routes: Routes = [

  {
    path: '',
    component: InicioComponent
  },
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { path: 'aprender',
  component: LearnComponent 
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'niveles-aprender',
    component: NivelesLearnComponent
  },
  {
    path: 'mod-profile',
    component: ModProfileComponent
  },
  {
    path: 'retos',
    component: RetosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
