import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { LearnService } from 'src/app/shared/learn.service';

@Component({
  selector: 'app-jugar',
  templateUrl: './jugar.component.html',
  styleUrls: ['./jugar.component.css']
})
export class JugarComponent implements OnInit{

  nivelActual: number;

  constructor(
    public componenteApp:AppComponent,
    public apiService:LearnService){}

  ngOnInit(): void {
    this.componenteApp.mostrarHeader = true;
    this.nivelActual = this.apiService.id_level;
  }

  changeLevel(level: number): void {
    this.nivelActual = this.apiService.id_level;
    if (level <= this.nivelActual) {
      this.nivelActual = level;
    }
  }

}
