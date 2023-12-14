import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import { AppComponent } from 'src/app/app.component';
import unitsData1, { Unit } from 'src/app/models/unit';
import { HighlightPipe } from '../../pipes/highlight.pipe';
import learnKeywords from '../../../assets/content/keywords.js';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css'],
  providers: [HighlightPipe]
})
export class LearnComponent implements AfterViewInit, OnInit {

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
      codeExample.textContent = currentPart.code;
      Prism.highlightElement(codeExample);
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
