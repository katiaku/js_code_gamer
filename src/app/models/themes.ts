// export class Themes {

//   idthemes: number;
//   title: string;
//   content: string;
//   code: string;
//   id_level: number;

//   constructor(idthemes: number, title: string, content: string, code: string, id_level: number) {
//     this.idthemes = idthemes;
//     this.title = title;
//     this.content = content;
//     this.code = code;
//     this.id_level = id_level;
//   }

// }

export class Themes {

  idthemes: number;
  title_level: string;
  id_level: number;
  theme_title: string;
  content: string;
  code: string;

  constructor(idthemes: number, title_level: string, id_level: number, theme_title: string, content: string, code: string) {
    this.idthemes = idthemes;
    this.title_level = title_level;
    this.id_level = id_level;
    this.theme_title = theme_title;
    this.content = content;
    this.code = code;
  }

}
