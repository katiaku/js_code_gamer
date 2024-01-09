import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-niveles-learn',
  templateUrl: './niveles-learn.component.html',
  styleUrls: ['./niveles-learn.component.css']
})
export class NivelesLearnComponent implements OnInit{

  unlockedLevel: number = 9;

  constructor(public componenteApp:AppComponent){}

  ngOnInit(): void {
    this.componenteApp.mostrarHeader = true;
  }

  isLevelUnlocked(level: number): boolean {
    return level <= this.unlockedLevel;
  }

  completeLevel(idlevel: number): void {
    if (idlevel == this.unlockedLevel) {
      this.unlockedLevel++;
    }
  }

}
