export class Levels {

  idlevels: number;
  title: string;
  number_theme: number;
  number_challenge: number;

  constructor(idlevels: number, title: string, number_theme: number, number_challenge: number) {
    this.idlevels = idlevels;
    this.title = title;
    this.number_theme = number_theme;
    this.number_challenge = number_challenge;
  }

}
