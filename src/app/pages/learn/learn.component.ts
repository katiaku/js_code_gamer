import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {
  currentUnitIndex = 0;
  currentPartIndex = 0;
  unitsData: any = [
    {
      "title": "Introducción a JavaScript",
      "content": [
        {
          "title": "Historia y origen de JavaScript",
          "content": "JavaScript fue creado por Brendan Eich en 1995...",
          "code": "const color = require(\"colors\");"
        },
        {
          "title": "Características y usos de JavaScript",
          "content": "JavaScript es un lenguaje de programación versátil...",
          "code": "let age = 30;"
        },
        {
          "title": "Configuración del entorno de desarrollo",
          "content": "Para comenzar a programar en JavaScript, necesitas...",
          "code": ""
        }
      ]
    },
    {
      "title": "Variables y Tipos de Datos",
      "content": [
        {
          "title": "Declaración de variables",
          "content": "En JavaScript, puedes declarar variables con la palabra clave...",
          "code": ""
        },
        {
          "title": "Tipos de datos en JavaScript",
          "content": "Los tipos de datos en JavaScript incluyen números, cadenas, booleanos, objetos, etc.",
          "code": ""
        },
        {
          "title": "Conversión entre tipos de datos",
          "content": "Es posible convertir entre diferentes tipos de datos en JavaScript...",
          "code": ""
        }
      ]
    },
    {
      "title": "Operadores y Expresiones",
      "content": [
        {
          "title": "Operadores aritméticos, de asignación y lógicos",
          "content": "JavaScript incluye operadores para realizar operaciones...",
          "code": ""
        },
        {
          "title": "Operadores de comparación",
          "content": "Los operadores de comparación se utilizan para comparar valores...",
          "code": ""
        },
        {
          "title": "Expresiones y evaluación",
          "content": "Las expresiones son combinaciones de valores y operadores que se pueden evaluar...",
          "code": ""
        }
      ]
    },
    {
      "title": "Estructuras de Control",
      "content": [
        {
          "title": "Condicionales",
          "content": "Las estructuras condicionales, como if, else if, else y switch, permiten...",
          "code": ""
        },
        {
          "title": "Bucles",
          "content": "Los bucles, como for, while y do-while, permiten repetir bloques de código...",
          "code": ""
        },
        {
          "title": "Control de flujo",
          "content": "Las sentencias break y continue se utilizan para controlar el flujo de ejecución...",
          "code": ""
        }
      ]
    },
    {
      "title": "Funciones",
      "content": [
        {
          "title": "Declaración y llamada de funciones",
          "content": "Las funciones son bloques de código reutilizables que se pueden declarar...",
          "code": ""
        },
        {
          "title": "Parámetros y argumentos",
          "content": "Los parámetros son variables que se utilizan en la declaración de una función...",
          "code": ""
        },
        {
          "title": "Ámbito de las variables (scope)",
          "content": "El ámbito de una variable determina dónde se puede acceder y modificar esa variable...",
          "code": ""
        },
        {
          "title": "Funciones anónimas y funciones de flecha",
          "content": "Las funciones anónimas y las funciones de flecha son formas alternativas de definir funciones...",
          "code": ""
        }
      ]
    },
    {
      "title": "Arreglos y Objetos",
      "content": [
        {
          "title": "Creación y manipulación de arreglos",
          "content": "Los arreglos en JavaScript son estructuras que permiten almacenar y acceder...",
          "code": ""
        },
        {
          "title": "Métodos de arreglo",
          "content": "Los métodos de arreglo, como map, filter y reduce, proporcionan formas poderosas...",
          "code": ""
        },
        {
          "title": "Creación y manipulación de objetos",
          "content": "Los objetos en JavaScript son colecciones de pares clave-valor que se utilizan para...",
          "code": ""
        },
        {
          "title": "Propiedades y métodos de objetos",
          "content": "Las propiedades son valores asociados a un objeto, y los métodos son funciones que pertenecen...",
          "code": ""
        }
      ]
    },
    {
      "title": "DOM y Eventos",
      "content": [
        {
          "title": "Introducción al Document Object Model (DOM)",
          "content": "El DOM es una representación estructurada de un documento HTML que permite...",
          "code": ""
        },
        {
          "title": "Manipulación del DOM con JavaScript",
          "content": "JavaScript se utiliza para manipular el content, la estructura y el estilo del DOM...",
          "code": ""
        },
        {
          "title": "Eventos y manejo de eventos",
          "content": "Los eventos son acciones o sucesos que ocurren en la interfaz de usuario y desencadenan...",
          "code": ""
        }
      ]
    },
    {
      "title": "AJAX y Promesas",
      "content": [
        {
          "title": "Introducción a AJAX",
          "content": "AJAX (Asynchronous JavaScript and XML) es una técnica de desarrollo web que permite...",
          "code": ""
        },
        {
          "title": "Realización de peticiones HTTP con JavaScript",
          "content": "JavaScript se utiliza para realizar peticiones HTTP asincrónicas, lo que permite...",
          "code": ""
        },
        {
          "title": "Promesas y manejo asíncrono",
          "content": "Las promesas son objetos en JavaScript que representan la finalización o el fracaso eventual...",
          "code": ""
        }
      ]
    },
    {
      "title": "Programación Orientada a Objetos (OOP)",
      "content": [
        {
          "title": "Conceptos básicos de OOP",
          "content": "La programación orientada a objetos (OOP) es un paradigma de programación basado en el concepto...",
          "code": ""
        },
        {
          "title": "Creación de clases y objetos en JavaScript",
          "content": "JavaScript permite la creación de clases y objetos, lo que facilita la aplicación de principios...",
          "code": ""
        },
        {
          "title": "Herencia y encapsulamiento en JavaScript",
          "content": "La herencia permite a una clase heredar propiedades y métodos de otra, mientras que el encapsulamiento...",
          "code": ""
        }
      ]
    }
  ];

  constructor(public componenteApp:AppComponent){}

  ngOnInit(): void {
    this.componenteApp.mostrarHeader = true;
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
