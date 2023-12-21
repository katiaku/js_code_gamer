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
import { TextFormatterPipe } from './pipes/text-formatter.pipe';
import { ProfileComponent } from './pages/profile/profile.component';
import { ModProfileComponent } from './pages/mod-profile/mod-profile.component';
import { IntroNivelComponent } from './pages/intro-nivel/intro-nivel.component';
import { RetosComponent } from './pages/retos/retos.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { JugarComponent } from './pages/jugar/jugar.component';
import { ContentService } from './shared/content.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


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
    ProfileComponent,
    ModProfileComponent,
    TextFormatterPipe,
    ProfileComponent,
    IntroNivelComponent,
    RetosComponent,
    QuienesSomosComponent,
    JugarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    })
  ],
  providers: [
    ContentService,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
