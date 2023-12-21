import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import { AppComponent } from 'src/app/app.component';
import { TextFormatterPipe } from '../../pipes/text-formatter.pipe';
import learnKeywords from '../../../assets/content/keywords.js';
import { LearnService } from 'src/app/shared/learn.service';
import { UsersService } from 'src/app/shared/users.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css'],
  providers: [TextFormatterPipe]
})
export class LearnComponent implements AfterViewInit, OnInit {

  constructor(public componentApp: AppComponent,
    public apiService: LearnService,
    public apiServiceUsers: UsersService,
    private toast: ToastrService) {
      this.apiService.themes = null;
    }

  // currentLevelIndex = 0;
  currentThemeIndex = 0;
  text = '';
  keywords = learnKeywords;

  ngOnInit(): void {
    this.componentApp.mostrarHeader = true;
    this.loadContent();
  }

  ngAfterViewInit(): void {
    Prism.highlightAll();
  }

  loadContent(): void {
    this.updateContent();
  }

  updateContent(): void {
    // this.showThemes(this.apiServiceUsers.user.iduser);
    this.showThemes();

    const currentTheme = this.apiService.themes[this.currentThemeIndex].content;
    this.text = currentTheme;
    const codeExample = document.querySelector('.language-javascript');
    if (codeExample) {
      codeExample.textContent = this.apiService.themes[this.currentThemeIndex].code;
      Prism.highlightElement(codeExample);
    }
  }

  // showThemes(iduser: number) {
  //   this.apiService.getAll(iduser).subscribe((resp: any) => {
  //     console.log(resp);
  //     if (resp.error || resp.length <= 0)
  //       this.toast.warning('No hay contenido', '', { positionClass: 'toastPosition' });
  //     else
  //       this.apiService.themes = resp;
  //   });
  // }

  showThemes() {
    this.apiService.getAll().subscribe((resp: any) => {
      console.log(resp);
      if (resp.error || resp.length <= 0)
        this.toast.warning('No hay contenido', '', { positionClass: 'toastPosition' });
      else
        this.apiService.themes = resp;
    });
  }

  nextTheme(): void {
    this.currentThemeIndex++;
    this.updateContent();
  }

  prevTheme(): void {
    this.currentThemeIndex--;
    this.updateContent();
  }

}
