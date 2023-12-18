import { Component, OnInit, AfterViewInit, OnDestroy, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit, AfterViewInit, OnDestroy {

  private starryBackground: HTMLDivElement | null = null;

  constructor(public router: Router, public componenteApp: AppComponent, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.componenteApp.mostrarHeader = false;
  }

  ngAfterViewInit(): void {
    this.createStars();
  }

  ngOnDestroy(): void {
    this.removeStars();
  }

  private createStars(): void {
    this.starryBackground = this.renderer.createElement('div');
    this.renderer.addClass(this.starryBackground, 'starry-background');
    const numberOfStars = 60;
    for (let i = 0; i < numberOfStars; i++) {
      const star = this.renderer.createElement('div');
      const randomDelay = Math.random() * 10;
      this.renderer.addClass(star, 'star');
      this.renderer.setStyle(star, 'top', `${Math.random() * 40 + 10}%`);
      this.renderer.setStyle(star, 'left', `${Math.random() * 100}%`);
      this.renderer.setStyle(star, 'animation-delay', `${randomDelay}s`);
      this.renderer.appendChild(this.starryBackground, star);
    }
    this.renderer.appendChild(document.body, this.starryBackground);
  }

  private removeStars(): void {
    if (this.starryBackground) {
      this.renderer.removeChild(document.body, this.starryBackground);
      this.starryBackground = null;
    }
  }

  start() {
    this.router.navigate(['/landing']);
  }
}
