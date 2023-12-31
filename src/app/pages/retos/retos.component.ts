import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import  { Unit, unitsDataRetos } from 'src/app/models/unit';
import { TextFormatterPipe } from '../../pipes/text-formatter.pipe';
import learnKeywords from '../../../assets/content/keywords.js';
import * as Prism from 'prismjs';
import * as ace from "ace-builds";
import { ContentService } from 'src/app/shared/content.service';
import { JugarComponent } from '../jugar/jugar.component';
import { Respuesta } from 'src/app/shared/respuesta';
import { Content } from 'src/app/models/content';
import { UsersService } from 'src/app/shared/users.service';


@Component({
  selector: 'app-retos',
  templateUrl: './retos.component.html',
  styleUrls: ['./retos.component.css'],
  providers: [TextFormatterPipe]
})
export class RetosComponent implements AfterViewInit, OnInit {

  @ViewChild("editor") private editor: ElementRef<HTMLElement>;
  
  constructor(public componentApp: AppComponent, public contentService:ContentService, public userService: UsersService) {
    this.contentService.nivel = 1;

  }

  currentUnitIndex = 0;
  currentPartIndex = 0;
  unitsData:  Content[];

  text;
  keywords = learnKeywords;

  codigoUsuario:string = "";
  resultadoEjecucion:string = "";
  ngOnInit(): void {
    console.log(this.contentService.nivel);
    console.log(this.userService.user);
    
    this.componentApp.mostrarHeader = true;
    // this.loadContent();
    // this.contentService.getContentPlay(this.userService.user.iduser,this.contentService.nivel).subscribe((respuesta: Respuesta) => {
      this.contentService.getContentPlay(24,1).subscribe((respuesta: Respuesta) => {
      if (respuesta.error) {
        console.log(respuesta.message);
      } else {
        const dataAsArray: Content[] = Array.isArray(respuesta.data) ? respuesta.data : [respuesta.data];
        this.contentService.content = dataAsArray;
        this.unitsData = this.contentService.content;
        const currentUnit = this.unitsData[this.currentUnitIndex];
        this.text = currentUnit.content;
        ace.edit(this.editor.nativeElement).session.setValue(this.unitsData[this.currentUnitIndex].code);
      }
    });
  }

  ngAfterViewInit(): void {
    Prism.highlightAll();
    ace.config.set("basePath", "https://unpkg.com/ace-builds@1.4.12/src-noconflict");
    const aceEditor = ace.edit(this.editor.nativeElement);
    aceEditor.session.setValue(this.unitsData[this.currentUnitIndex].code);

    aceEditor.setTheme("ace/theme/twilight");
    aceEditor.session.setMode("ace/mode/javascript");
    aceEditor.session.setUseSoftTabs(true);
    aceEditor.session.setUseWrapMode(true);


    // Sobrescribe la consola para capturar mensajes
    const self = this;
    const originalConsoleLog = console.log;
    console.log = function (...args: any[]) {
      originalConsoleLog.apply(console, args);
      self.resultadoEjecucion += args.join(' ') + '\n';  // Almacena el mensaje
    };
    
   
  }

  loadContent(): void {
    this.updateContent();
  }

  updateContent(): void {
    console.log(this.unitsData.length);
    this.unitsData = this.contentService.content;
        const currentUnit = this.unitsData[this.currentUnitIndex];
        this.text = currentUnit.content;
        ace.edit(this.editor.nativeElement).session.setValue(this.unitsData[this.currentUnitIndex].code);
        this.resultadoEjecucion = "";
    
    
    
  }

  nextPart(): void {
    if (this.currentPartIndex < this.unitsData.length - 1) {
      this.currentPartIndex++;
      this.currentUnitIndex++;
    } else if (this.currentUnitIndex < this.unitsData.length - 1) {
      
    }
    this.updateContent();
  }

  prevPart(): void {
    if (this.currentPartIndex > 0) {
      this.currentPartIndex--;
      this.currentUnitIndex--;
    } else {
      console.log("Problemas en el paraiso");
      
    }

    this.updateContent();
  }

  ejecutarCodigo(){
    this.codigoUsuario = ace.edit(this.editor.nativeElement).session.getValue();

    this.resultadoEjecucion = "";
    try{
      eval(this.codigoUsuario);
    }catch(err){
      console.error("Error al ejecutar el codigo: ", err.message);
      this.resultadoEjecucion = "Error: " + err.message;
      
    }

  }
  
}
