import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import { AppComponent } from 'src/app/app.component';
import { TextFormatterPipe } from '../../pipes/text-formatter.pipe';
import learnKeywords from '../../../assets/content/keywords.js';
import { LearnService } from 'src/app/shared/learn.service';
import { UsersService } from 'src/app/shared/users.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

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
    private toast: ToastrService,
    private route: ActivatedRoute) {
      this.apiService.themes = null;
    }

  currentThemeIndex = 0;
  text = '';
  keywords = learnKeywords;

  ngOnInit(): void {
    this.componentApp.mostrarHeader = true;
    this.route.params.subscribe(params => {
      const id_level = params['id_level'];
      this.apiService.id_level = id_level;
      this.loadContent();
    });
  }

  ngAfterViewInit(): void {
    Prism.highlightAll();
  }

  loadContent(): void {
    this.updateContent();
  }

  updateContent(): void {
    this.showThemes(this.apiServiceUsers.user.iduser, this.apiService.id_level);

    const currentTheme = this.apiService.themes[this.currentThemeIndex].content;
    this.text = currentTheme;
    const codeExample = document.querySelector('.language-javascript');
    if (codeExample) {
      codeExample.textContent = this.apiService.themes[this.currentThemeIndex].code;
      Prism.highlightElement(codeExample);
    }
  }

  showThemes(iduser: number, id_level: number) {
    this.apiService.getAll(iduser, id_level).subscribe((resp: any) => {
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
