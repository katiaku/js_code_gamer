import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ContentService } from 'src/app/shared/content.service';

@Component({
  selector: 'app-jugar',
  templateUrl: './jugar.component.html',
  styleUrls: ['./jugar.component.css']
})
export class JugarComponent implements OnInit{

  // nivelActual:number;

  constructor(
    public componenteApp:AppComponent,
    public contentService:ContentService){}

  ngOnInit(): void {
    this.componenteApp.mostrarHeader = true;
  }

}
