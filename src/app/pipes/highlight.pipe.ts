import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'highlight'
})

export class HighlightPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string, words: string[], color: string = '#FFFF00'): SafeHtml {
    if (!value || !words || words.length === 0) {
      return value;
    }
    const escapeRegExp = (str: string) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const wordsEscaped = words.map(escapeRegExp);
    const pattern = new RegExp(wordsEscaped.join('|'), 'gi');
    const highlightedValue = value.replace(pattern, match => `<span style="color: ${color};">${match}</span>`);
    return this.sanitizer.bypassSecurityTrustHtml(highlightedValue);
  }
}
