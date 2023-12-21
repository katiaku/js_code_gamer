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
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { JugarComponent } from './pages/jugar/jugar.component';
import { IntroNivelComponent } from './pages/intro-nivel/intro-nivel.component'

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
  { path: 'aprender/:id_level',
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
  },
  {
    path: 'quienes-somos',
    component: QuienesSomosComponent
  },
  {
    path: 'jugar',
    component: JugarComponent
  },
  {
    path: 'intro-nivel',
    component: IntroNivelComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
