import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { RegisterComponent } from './pages/register/register.component';
import { LandingComponent } from './pages/landing/landing.component';
import { NivelesLearnComponent } from './pages/niveles-learn/niveles-learn.component';
import { LearnComponent } from './pages/learn/learn.component';
import { HighlightPipe } from './pipes/highlight.pipe';
import { ProfileComponent } from './pages/profile/profile.component';
import { IntroNivelComponent } from './pages/intro-nivel/intro-nivel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    NivelesLearnComponent,
    LearnComponent,
    InicioComponent,
    RegisterComponent,
    LandingComponent,
    HighlightPipe,
    ProfileComponent,
    IntroNivelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
