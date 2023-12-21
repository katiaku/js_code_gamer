import { Component, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'js_code_gamer';
  mostrarHeader:boolean = false;

  ngAfterViewChecked() {
    this.mostrarHeader = true;
  }
}
