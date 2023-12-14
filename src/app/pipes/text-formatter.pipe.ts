import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'textFormatter'
})

export class TextFormatterPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string, words: string[], color: string = '#FFFF00'): SafeHtml {
    if (!value || !words || words.length === 0) {
      return value;
    }

    const escapeRegExp = (str: string) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const wordsEscaped = words.map(escapeRegExp);
    const pattern = new RegExp(wordsEscaped.join('|'), 'gi');
    const highlightedValue = value.replace(pattern, match => `<span style="color: ${color};">${match}</span>`);
    const result = this.separateParagraphs(highlightedValue);
    return this.sanitizer.bypassSecurityTrustHtml(result);
  }

  separateParagraphs(value: string): any {
    const paragraphs = value.split('\n').map(paragraph => `<p style="margin-bottom: .6rem;">${paragraph}</p>`).join('');
    // return this.sanitizer.bypassSecurityTrustHtml(paragraphs);
    return paragraphs;
  }
}
