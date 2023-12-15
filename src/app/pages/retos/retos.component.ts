import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import unitsData1, { Unit } from 'src/app/models/unit';
import { HighlightPipe } from 'src/app/pipes/highlight.pipe';
import learnKeywords from '../../../assets/content/keywords.js';
import * as Prism from 'prismjs';
import * as ace from "ace-builds";


@Component({
  selector: 'app-retos',
  templateUrl: './retos.component.html',
  styleUrls: ['./retos.component.css'],
  providers: [HighlightPipe]
})
export class RetosComponent implements AfterViewInit, OnInit {

  @ViewChild("editor") private editor: ElementRef<HTMLElement>;
  constructor(public componentApp: AppComponent) {}

  currentUnitIndex = 0;
  currentPartIndex = 0;
  unitsData: Unit[] = unitsData1;

  text = this.unitsData[this.currentUnitIndex].content[this.currentPartIndex].content;
  keywords = learnKeywords;

  ngOnInit(): void {
    this.componentApp.mostrarHeader = true;
    this.loadContent();
  }

  ngAfterViewInit(): void {
    Prism.highlightAll();
    ace.config.set("basePath", "https://unpkg.com/ace-builds@1.4.12/src-noconflict");
    const aceEditor = ace.edit(this.editor.nativeElement);
    aceEditor.session.setValue("");

    aceEditor.setTheme("ace/theme/twilight");
    aceEditor.session.setMode("ace/mode/javascript");
  }

  loadContent(): void {
    this.updateContent();
  }

  updateContent(): void {
    const currentUnit = this.unitsData[this.currentUnitIndex];
    const currentPart = currentUnit.content[this.currentPartIndex];
    this.text = currentPart.content;
    const codeExample = document.querySelector('.language-javascript');
    if (codeExample) {
      
    }
  }

  nextPart(): void {
    if (this.currentPartIndex < this.unitsData[this.currentUnitIndex].content.length - 1) {
      this.currentPartIndex++;
    } else if (this.currentUnitIndex < this.unitsData.length - 1) {
      this.currentUnitIndex++;
      this.currentPartIndex = 0;
    }
    this.updateContent();
  }

  prevPart(): void {
    if (this.currentPartIndex > 0) {
      this.currentPartIndex--;
    } else if (this.currentUnitIndex > 0) {
      this.currentUnitIndex--;
      this.currentPartIndex = this.unitsData[this.currentUnitIndex].content.length - 1;
    }

    this.updateContent();
  }
}
