export class Content {

    unit: string;
    title: string;
    content: string;
    code: string;
    resultado: string;
    idchalllenges: number;
    id_level: number;
  
    constructor(unit:string,title: string, content: string, code: string, resultado: string, idchallenges:number, id_level:number) {
    
        this.unit = unit;
      this.title = title;
      this.content = content;
      this.code = code;
      this.resultado = resultado;
      this.idchalllenges = idchallenges;
      this.id_level = id_level;
    }
}
