import { Part } from "./part";

export class Unit {

  title: string;
  content: Part[];

  constructor(title: string, content: Part[]) {
    this.title = title;
    this.content = content;
  }

}

let unitsDataLearn: Unit[] = [
  {
    "title": "Introducción a JavaScript",
    "content": [
      {
        "title": "Historia y origen de JavaScript",
        "content": `JavaScript, a menudo abreviado como JS, es un lenguaje de programación de alto nivel, interpretado y orientado a objetos. Fue creado por Brendan Eich mientras trabajaba en Netscape Communications Corporation en 1995. La necesidad de un lenguaje que permitiera a los desarrolladores agregar interactividad a las páginas web llevó al desarrollo de JavaScript. Nacimiento en Netscape: JavaScript se diseñó originalmente para ser utilizado en el navegador Netscape Navigator. Su objetivo era proporcionar a los desarrolladores la capacidad de manipular elementos de una página web y realizar acciones del lado del cliente de manera dinámica.
          Influencias y Evolución: JavaScript tomó prestadas muchas características de otros lenguajes de programación, como Java y C. Aunque su nombre sugiere una relación con Java, ambos lenguajes son distintos y se utilizan para diferentes propósitos.
          Estándares y Comités: A medida que JavaScript ganó popularidad, se formaron estándares para garantizar su interoperabilidad entre diferentes navegadores. Actualmente, la especificación ECMAScript define el estándar de JavaScript, y el desarrollo y la evolución de JavaScript son gestionados por el Comité Técnico ECMA/TC39.`,
        "code": `
          // Ejemplo de uso de JavaScript
          console.log("Hola, mundo!");

          // Manipulación del DOM (Document Object Model)
          document.getElementById("miElemento").innerHTML = "¡Hola desde JavaScript!";

          // Variables y Tipos de Datos
          let nombre = "Juan";
          let edad = 25;
          console.log(\`Mi nombre es \${nombre} y tengo \${edad} años.\`);

          // Funciones
          function saludar(nombre) {
            return \`¡Hola, \${nombre}!\`;
          }
          console.log(saludar("María"));
        `
      },
      {
        "title": "Características y usos de JavaScript",
        "content": `JavaScript se ha consolidado como uno de los lenguajes de programación más utilizados en el desarrollo web y más allá. Sus características y usos abarcan una variedad de áreas, lo que contribuye a su versatilidad y relevancia.
          Lenguaje Interpretado: JavaScript es un lenguaje interpretado, lo que significa que se ejecuta directamente en el navegador sin necesidad de compilación. Esto facilita el desarrollo y la depuración.
          Orientado a Objetos: JavaScript es un lenguaje orientado a objetos, lo que implica que se basa en la idea de objetos que pueden contener datos y funciones. La programación orientada a objetos permite la reutilización de código y la organización eficiente del mismo.
          Dinámico y Débilmente Tipado: JavaScript es dinámico, lo que significa que las variables no están vinculadas a un tipo específico y pueden cambiar durante la ejecución del programa. Además, es débilmente tipado, lo que permite realizar operaciones sin la necesidad de declarar explícitamente el tipo de datos.
          Interactividad en el Navegador: La principal aplicación de JavaScript es la mejora de la interactividad en las páginas web. Puede manipular el DOM para cambiar el contenido de la página, gestionar eventos del usuario y realizar solicitudes asíncronas al servidor.
          Compatibilidad con Múltiples Plataformas: JavaScript se ejecuta en todos los navegadores modernos, lo que garantiza la portabilidad y la compatibilidad con diversas plataformas.`,
        "code": `// Uso de variables y operaciones
let edad = 30;
let incremento = 5;
edad = edad + incremento;

// Manipulación del DOM para mostrar un mensaje
document.getElementById("mensaje").innerHTML = \`La edad actual es: \${edad}\`;

// Funciones para mejorar la reutilización del código
function duplicarNumero(numero) {
  return numero * 2;
}

let resultado = duplicarNumero(10);
console.log(resultado); // Resultado: 20

// Gestión de eventos del usuario
document.getElementById("miBoton").addEventListener("click", function() {
  alert("¡Botón clickeado!");
});

// Realización de una solicitud asíncrona
fetch("https://api.example.com/data")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error en la solicitud:", error));
        `
      },
      {
        "title": "Configuración del entorno de desarrollo",
        "content": `Configurar un entorno de desarrollo adecuado es esencial para comenzar a programar en JavaScript de manera eficiente. Aquí hay algunos pasos clave para establecer un entorno de desarrollo sólido.
          Navegador Web: JavaScript se ejecuta en el navegador, por lo que necesitarás uno para probar y depurar tu código. Los navegadores populares como Google Chrome, Mozilla Firefox o Microsoft Edge son opciones comunes.
          Editor de Código: Elige un editor de código que se adapte a tus preferencias. Algunos ejemplos populares incluyen Visual Studio Code, Atom o Sublime Text. Estos editores proporcionan funciones avanzadas que facilitan la escritura y el mantenimiento del código.
          Node.js y npm: Node.js es un entorno de ejecución de JavaScript del lado del servidor. Además, npm (Node Package Manager) te permitirá gestionar las dependencias y paquetes de JavaScript en tu proyecto.
          Sistema de Control de Versiones: Utilizar un sistema de control de versiones como Git es esencial para realizar un seguimiento de los cambios en tu código y colaborar con otros desarrolladores. Plataformas como GitHub, GitLab o Bitbucket pueden alojar tus repositorios Git de forma remota.
          Consola del Navegador: Las consolas de desarrollo de los navegadores son herramientas valiosas para la depuración y visualización de mensajes de registro. Aprender a utilizar la consola te permitirá identificar errores y realizar pruebas rápidas.`,
        "code": `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi Primer Proyecto JavaScript</title>
</head>
<body>
  <h1>Hola, Mundo!</h1>
  <script src="app.js"></script>
</body>
</html>
        `
      }
    ]
  },
  {
    "title": "Variables y Tipos de Datos",
    "content": [
      {
        "title": "Declaración de variables",
        "content": `La declaración de variables es fundamental en cualquier lenguaje de programación, y JavaScript no es una excepción.
          Palabras Clave: En JavaScript, utilizamos las palabras clave var, let y const para declarar variables. La elección de la palabra clave depende de la naturaleza de la variable y el ámbito en el que se utilizará.
          var: Antes de la introducción de let y const, var era la única forma de declarar variables en JavaScript. Sin embargo, tiene un comportamiento peculiar relacionado con el ámbito, por lo que se prefiere el uso de let y const en la mayoría de los casos.
          let y const: Estas son las formas modernas de declarar variables. let se utiliza para variables que pueden cambiar su valor, mientras que const se usa para variables constantes cuyo valor no cambia una vez asignado.`,
        "code": `// Ejemplos de declaración de variables en JavaScript

// Utilizando var (evitar su uso en situaciones modernas)
var edad = 25;
var nombre = "Juan";

// Utilizando let (preferido para variables que pueden cambiar)
let cantidadProductos = 10;
let usuarioActivo = true;

// Utilizando const (preferido para variables constantes)
const PI = 3.1416;
const nombreApp = "MiApp";

// Intentar cambiar el valor de una constante generará un error
// PI = 3.14; // Esto generará un error

// Variables sin valor inicial
let precioProducto;
console.log(precioProducto); // Salida: undefined
        `
      },
      {
        "title": "Tipos de datos en JavaScript",
        "content": `En JavaScript, los tipos de datos son las características fundamentales que le dan significado y valor a las variables. Aquí se presentan algunos de los tipos de datos más comunes en JavaScript:
          Números (Numbers): Representan valores numéricos. Pueden ser enteros o decimales.
          Cadenas de Texto (Strings): Representan secuencias de caracteres. Se crean utilizando comillas simples ('') o dobles ("").
          Booleanos (Booleans): Representan valores de verdad o falsedad (true o false).
          Objetos (Objects): Representan colecciones de propiedades y métodos. Se crean utilizando llaves {}.
          Arreglos (Arrays): Representan listas ordenadas de valores. Se crean utilizando corchetes [].`,
        "code": `// Ejemplos de tipos de datos en JavaScript

// Números
let edad = 30;
let precio = 45.99;

// Cadenas de Texto
let nombre = "Juan";
let mensaje = '¡Hola, mundo!';

// Booleanos
let esMayorDeEdad = true;
let activado = false;

// Objetos
let persona = {
  nombre: "Ana",
  edad: 25,
  ciudad: "Madrid"
};

// Arreglos
let numeros = [1, 2, 3, 4, 5];
let colores = ['rojo', 'verde', 'azul'];

// Tipos especiales
let nulo = null; // Representa la ausencia intencional de cualquier objeto o valor
let indefinido = undefined; // Representa un valor no asignado

// Mostrar tipos de datos en la consola
console.log(typeof edad); // Salida: number
console.log(typeof nombre); // Salida: string
console.log(typeof esMayorDeEdad); // Salida: boolean
console.log(typeof persona); // Salida: object
console.log(typeof numeros); // Salida: object (los arreglos son objetos en JavaScript)
console.log(typeof nulo); // Salida: object (esto es un fallo conocido en JavaScript)
console.log(typeof indefinido); // Salida: undefined
        `
      },
      {
        "title": "Conversión entre tipos de datos",
        "content": `En JavaScript, la conversión entre diferentes tipos de datos es una tarea común y puede ser necesaria en diversas situaciones. A continuación, se presentan algunas formas de realizar conversiones entre tipos de datos:
          Coerción Implícita: JavaScript realiza automáticamente conversiones implícitas cuando se mezclan diferentes tipos de datos en una operación. Por ejemplo, concatenar una cadena con un número.
          Métodos de Conversión: JavaScript proporciona métodos específicos para convertir valores de un tipo a otro. Algunos de estos métodos son String(), Number(), y Boolean().`,
        "code": `// Ejemplos de conversión entre tipos de datos en JavaScript

// Coerción Implícita
let numero = 5;
let texto = "El resultado es: " + numero; // Coerción implícita a cadena

console.log(texto); // Salida: El resultado es: 5

// Métodos de Conversión
let cadenaNumero = "123";
let numeroConvertido = Number(cadenaNumero);

console.log(typeof cadenaNumero); // Salida: string
console.log(typeof numeroConvertido); // Salida: number

let valorVerdad = Boolean("Hola");
console.log(valorVerdad); // Salida: true

// Conversión a Cadenas
let num = 42;
let cadenaNum = String(num);

console.log(typeof num); // Salida: number
console.log(typeof cadenaNum); // Salida: string
        `
      }
    ]
  },
  {
    "title": "Operadores y Expresiones",
    "content": [
      {
        "title": "Operadores aritméticos, de asignación y lógicos",
        "content": `En JavaScript, los operadores son símbolos especiales que realizan operaciones en operandos. Aquí se presentan tres tipos principales de operadores: aritméticos, de asignación y lógicos.
          Operadores Aritméticos: Estos operadores se utilizan para realizar operaciones matemáticas básicas.
          Suma (+): Suma dos operandos.
          Resta (-): Resta el segundo operando del primero.
          Multiplicación (*): Multiplica dos operandos.
          División (/): Divide el primer operando por el segundo.
          Módulo (%): Devuelve el resto de la división del primer operando por el segundo.
          Operadores de Asignación: Estos operadores se utilizan para asignar valores a variables.
          Asignación (=): Asigna el valor del lado derecho al lado izquierdo.
          Adición y asignación (+=): Incrementa la variable con el valor especificado.
          Sustracción y asignación (-=): Decrementa la variable con el valor especificado.
          Multiplicación y asignación (*=): Multiplica la variable por el valor especificado.
          División y asignación (/=): Divide la variable por el valor especificado.
          Módulo y asignación (%=): Calcula el módulo de la variable por el valor especificado y asigna el resultado.
          Operadores Lógicos: Estos operadores se utilizan para realizar operaciones lógicas entre valores booleanos.
          AND lógico (&&): Devuelve true si ambos operandos son true.
          OR lógico (||): Devuelve true si al menos uno de los operandos es true.
          NOT lógico (!): Niega el valor de su operando.`,
        "code": `// Ejemplos de operadores en JavaScript

// Operadores Aritméticos
let suma = 5 + 3; // 8
let resta = 10 - 4; // 6
let multiplicacion = 2 * 6; // 12
let division = 20 / 5; // 4
let modulo = 15 % 4; // 3

// Operadores de Asignación
let a = 5;
a += 3; // equivalente a: a = a + 3;

let b = 10;
b -= 4; // equivalente a: b = b - 4;

// Operadores Lógicos
let esMayorDeEdad = true;
let tieneLicencia = false;

let puedeConducir = esMayorDeEdad && tieneLicencia; // AND lógico
let puedeVotar = esMayorDeEdad || tieneLicencia; // OR lógico
let noPuedeConducir = !puedeConducir; // NOT lógico
        `
      },
      {
        "title": "Operadores de comparación",
        "content": `En JavaScript, los operadores de comparación se utilizan para comparar valores y devolver un resultado booleano (true o false) según la relación entre los operandos. Estos operadores son fundamentales para tomar decisiones condicionales en tus programas.
          Operadores de Comparación Comunes: Igual (==): Comprueba si dos valores son iguales, sin tener en cuenta el tipo de dato. (Ejemplo: a == b)
          Igualdad Estricta (===): Comprueba si dos valores son iguales, teniendo en cuenta el tipo de dato. (Ejemplo: a === b)
          No Igual (!=): Comprueba si dos valores no son iguales, sin tener en cuenta el tipo de dato. (Ejemplo: a != b)
          No Igualdad Estricta (!==): Comprueba si dos valores no son iguales, teniendo en cuenta el tipo de dato. (Ejemplo: a !== b)
          Mayor que (>): Comprueba si el valor de la izquierda es mayor que el valor de la derecha. (Ejemplo: a > b)
          Menor que (<): Comprueba si el valor de la izquierda es menor que el valor de la derecha. (Ejemplo: a < b)
          Mayor o Igual que (>=): Comprueba si el valor de la izquierda es mayor o igual que el valor de la derecha. (Ejemplo: a >= b)
          Menor o Igual que (<=): Comprueba si el valor de la izquierda es menor o igual que el valor de la derecha. (Ejemplo: a <= b)`,
        "code": `
// Ejemplos de operadores de comparación en JavaScript

let edadUsuario = 25;
let edadLimite = 18;

// Igualdad
let esMayorDeEdad = edadUsuario >= edadLimite; // true

// Desigualdad
let esMenorDeEdad = edadUsuario < edadLimite; // false

// Comparación de igualdad sin tener en cuenta el tipo de dato
let numeroString = "25";
let esIgualSinTipo = edadUsuario == numeroString; // true

// Comparación de igualdad teniendo en cuenta el tipo de dato
let esIgualConTipo = edadUsuario === numeroString; // false

// Mayor que y menor que
let precioProducto = 50;
let presupuestoUsuario = 30;
let puedeComprar = presupuestoUsuario >= precioProducto; // false
        `
      },
      {
        "title": "Expresiones y evaluación",
        "content": `En JavaScript, las expresiones son combinaciones de valores y operadores que pueden evaluarse para producir un resultado. Las expresiones pueden ser tan simples como una única variable o tan complejas como una serie de operaciones matemáticas y lógicas.
          Tipos de Expresiones:
          Expresiones Aritméticas: Realizan operaciones matemáticas como suma, resta, multiplicación y división. Ejemplo: let resultado = 10 + 5 * 2;
          Expresiones de Cadena: Concatenan cadenas de texto utilizando el operador de concatenación (+). Ejemplo: let saludo = "Hola, " + "Mundo";
          Expresiones de Comparación: Utilizan operadores de comparación para evaluar condiciones y producir un valor booleano. Ejemplo: let esMayor = 20 > 10;
          Expresiones Lógicas: Combinan valores booleanos utilizando operadores lógicos como AND (&&) y OR (||). Ejemplo: let resultadoLogico = true && false;
          Evaluación de Expresiones: La evaluación de una expresión implica calcular su valor resultante. Esto se realiza siguiendo las reglas de precedencia de operadores y asegurándose de que las operaciones se realicen en el orden correcto.`,
        "code": `
// Ejemplos de expresiones y evaluación en JavaScript

// Expresiones aritméticas
let resultadoAritmetico = 10 + 5 * 2; // 20

// Expresiones de cadena
let saludo = "Hola, " + "Mundo"; // "Hola, Mundo"

// Expresiones de comparación
let esMayor = 20 > 10; // true

// Expresiones lógicas
let resultadoLogico = true && false; // false
        `
      }
    ]
  },
  {
    "title": "Estructuras de Control",
    "content": [
      {
        "title": "Condicionales",
        "content": `Las estructuras condicionales en JavaScript son fundamentales para controlar el flujo de ejecución del programa en función de condiciones específicas. Estas estructuras permiten que un bloque de código se ejecute solo si una condición dada es verdadera.
          if Statement: Utilizado para ejecutar un bloque de código si la condición proporcionada es verdadera.
          Sintaxis:
          if (condicion) {
            // Código a ejecutar si la condición es verdadera
          }
          else if Statement: Se utiliza después de un bloque if para comprobar condiciones adicionales si la primera es falsa.
          Sintaxis:
          if (condicion) {
            // Código a ejecutar si la condición es verdadera
          } else if (otraCondicion) {
            // Código a ejecutar si la otra condición es verdadera
          }
          else Statement: Se ejecuta si la condición en el bloque if y todas las condiciones en bloques else if son falsas.
          Sintaxis:
          if (condicion) {
            // Código a ejecutar si la condición es verdadera
          } else {
            // Código a ejecutar si la condición es falsa
          }
          switch Statement: Se utiliza para evaluar una expresión y ejecutar bloques de código según los casos coincidentes.
          Sintaxis:
          switch (expresion) {
            case valor1:
              // Código a ejecutar si la expresión coincide con valor1
              break;
            case valor2:
              // Código a ejecutar si la expresión coincide con valor2
              break;
            default:
              // Código a ejecutar si la expresión no coincide con ningún caso
          }`,
        "code": `
// if Statement
let edad = 18;
if (edad >= 18) {
  console.log("Eres mayor de edad");
}

// else if Statement
let hora = 14;
if (hora < 12) {
  console.log("Buenos días");
} else if (hora < 18) {
  console.log("Buenas tardes");
}

// else Statement
let numero = 0;
if (numero > 0) {
  console.log("El número es positivo");
} else if (numero < 0) {
  console.log("El número es negativo");
} else {
  console.log("El número es cero");
}

// switch Statement
let dia = "Lunes";
switch (dia) {
  case "Lunes":
    console.log("Comienzo de semana");
    break;
  case "Viernes":
    console.log("¡Viernes al fin!");
    break;
  default:
    console.log("Otro día de la semana");
}
        `
      },
      {
        "title": "Bucles",
        "content": `Los bucles en JavaScript son estructuras que permiten repetir la ejecución de un bloque de código mientras se cumpla una condición específica. Los bucles más comunes son for, while, y do-while.
          for Loop: Utilizado para repetir un bloque de código un número específico de veces.
          Sintaxis:
          for (inicialización; condición; actualización) {
            // Código a ejecutar en cada iteración
          }
          while Loop: Repite un bloque de código mientras una condición sea verdadera.
          Sintaxis:
          while (condición) {
            // Código a ejecutar mientras la condición sea verdadera
          }
          do-while Loop: Similar al while loop, pero garantiza que el bloque de código se ejecute al menos una vez, incluso si la condición es falsa.
          Sintaxis:
          do {
            // Código a ejecutar al menos una vez
          } while (condición);`,
        "code": `
          // for Loop
          for (let i = 0; i < 5; i++) {
            console.log("Iteración " + (i + 1));
          }

          // while Loop
          let contador = 0;
          while (contador < 3) {
            console.log("Contador: " + contador);
            contador++;
          }

          // do-while Loop
          let num = 1;
          do {
            console.log("Número: " + num);
            num++;
          } while (num <= 3);
        `
      },
      {
        "title": "Control de flujo",
        "content": `El control de flujo en JavaScript se refiere a la gestión y dirección del flujo de ejecución de un programa. Dos sentencias clave para controlar este flujo son break y continue.
          break: La sentencia break se utiliza para salir de un bucle o de una estructura de control de flujo. Puede usarse en bucles for, while, y do-while, así como en estructuras condicionales como switch.
          continue: La sentencia continue se utiliza para omitir la parte restante de un bucle y pasar a la siguiente iteración. Similar a break, puede usarse en bucles for, while, y do-while.`,
        "code": `
          for (let i = 0; i < 5; i++) {
            if (i === 3) {
              break; // Sale del bucle cuando i es igual a 3
            }
            console.log("Iteración " + (i + 1));
          }

          for (let i = 0; i < 5; i++) {
            if (i === 2) {
              continue; // Salta la iteración cuando i es igual a 2
            }
            console.log("Iteración " + (i + 1));
          }
        `
      }
    ]
  },
  {
    "title": "Funciones",
    "content": [
      {
        "title": "Declaración y llamada de funciones",
        "content": `En JavaScript, las funciones son bloques de código reutilizables que te permiten encapsular una pieza específica de lógica y ejecutarla en cualquier momento. Las funciones son fundamentales para organizar y estructurar el código.
          JavaScript admite varios tipos de funciones, desde las declarativas más tradicionales hasta las modernas funciones de flecha introducidas en ECMAScript 6 (ES6). Las funciones también pueden ser anónimas o nombradas, proporcionando flexibilidad en la forma en que se definen y utilizan.
          Además, JavaScript permite el concepto de funciones como ciudadanos de primera clase, lo que significa que las funciones pueden asignarse a variables, pasarse como argumentos a otras funciones y devolverse como valores desde otras funciones. Un aspecto destacado es el alcance de las variables dentro de las funciones, conocido como ámbito.
          JavaScript implementa el ámbito léxico, lo que implica que una función puede acceder a las variables definidas en su entorno de declaración y también a las variables de funciones externas. Este comportamiento influye en cómo se diseñan las funciones y cómo se gestionan las variables a lo largo del código.`,
        "code": `
          // Declaración de una función llamada greet
          function greet(name) {
            console.log('Hello, ' + name + '!');
          }

          // Llamada a la función greet con el argumento "John"
          greet('John');

          // Declaración de una función anónima asignada a una variable
          const greet = function(name) {
            console.log('Hello, ' + name + '!');
          };

          // Llamada a la función greet con el argumento "Alice"
          greet('Alice');

          // Declaración de una función de flecha
          const greet = (name) => {
            console.log('Hello, ' + name + '!');
          };

          // Llamada a la función greet con el argumento "Bob"
          greet('Bob');
        `
      },
      {
        "title": "Parámetros y argumentos",
        "content": `Los parámetros en JavaScript son variables que se definen en la declaración de una función y actúan como marcadores de posición para los valores que la función espera recibir durante su invocación. Estos parámetros permiten que las funciones sean más flexibles y reutilizables, ya que pueden adaptarse a diferentes situaciones según los valores que se les proporcionen al llamarlas. Cuando declaramos una función con parámetros, estamos estableciendo la estructura que la función espera.
          Los argumentos, por otro lado, son los valores reales que se pasan a una función cuando esta se invoca. Estos valores pueden ser constantes, variables o expresiones. Las funciones pueden tener múltiples parámetros, y los argumentos deben coincidir en cantidad y orden con los parámetros esperados.
          JavaScript también admite la asignación de valores predeterminados a los parámetros, lo que permite que una función sea llamada incluso si no se proporcionan todos los argumentos. Además, la sintaxis de "rest" (...) permite manejar un número variable de argumentos como un arreglo.`,
        "code": `
          function saludar(nombre) {
            console.log('Hola, ' + nombre + '!');
          }

          saludar('Juan'); // Salida: Hola, Juan!

          function sumar(a, b) {
            return a + b;
          }

          let resultado = sumar(5, 3); // Aquí, 5 y 3 son argumentos que se asignan a los parámetros a y b
          console.log(resultado); // Salida: 8

          function mostrarColores(color1, color2 = 'rojo', ...coloresRestantes) {
            console.log('Color principal:', color1);
            console.log('Color secundario:', color2);
            console.log('Colores adicionales:', coloresRestantes);
          }

          mostrarColores('azul'); // Salida: azul, rojo, []
          mostrarColores('verde', 'amarillo', 'naranja', 'violeta'); // Salida: verde, amarillo, ['naranja', 'violeta']
        `
      },
      {
        "title": "Ámbito de las variables (scope)",
        "content": `El ámbito en JavaScript se refiere a la región del código donde una variable puede ser declarada y accedida. Entender el ámbito es crucial para evitar problemas relacionados con la visibilidad y modificación de variables en diferentes partes de un programa. JavaScript tiene dos tipos principales de ámbito: ámbito global y ámbito local.
          Ámbito Global: Una variable declarada fuera de cualquier función o bloque de código tiene un ámbito global. Esto significa que puede ser accedida desde cualquier parte del código, ya sea dentro de funciones, bucles u otros bloques. Sin embargo, es importante tener precaución con las variables globales, ya que pueden ser modificadas accidentalmente desde cualquier lugar, lo que podría conducir a comportamientos inesperados.
          Ámbito Local: Una variable declarada dentro de una función o bloque de código tiene un ámbito local. Esto significa que solo puede ser accedida y modificada dentro de ese contexto específico. Las variables locales tienen la ventaja de no interferir con otras partes del programa y ayudan a mantener la encapsulación.
          Ámbito de Bloque (a partir de ECMAScript 6): Con la introducción de let y const en ECMAScript 6, se introdujo el ámbito de bloque. Las variables declaradas con let y const tienen un ámbito limitado al bloque en el que están definidas. Esto es útil para evitar la contaminación del ámbito global y garantizar la privacidad de las variables.`,
        "code": `
          let variableGlobal = 'Soy global';

          function mostrarVariableGlobal() {
            console.log(variableGlobal);
          }

          mostrarVariableGlobal(); // Salida: Soy global

          function ejemploAmbitoLocal() {
            let variableLocal = 'Soy local';
            console.log(variableLocal);
          }

          ejemploAmbitoLocal(); // Salida: Soy local
          // console.log(variableLocal); // Error: variableLocal no está definida fuera de la función

          if (true) {
            let variableBloque = 'Soy de un bloque';
            console.log(variableBloque);
          }

          // console.log(variableBloque); // Error: variableBloque no está definida fuera del bloque
        `
      },
      {
        "title": "Funciones anónimas y funciones de flecha",
        "content": `En JavaScript, las funciones anónimas y las funciones de flecha son enfoques alternativos para definir funciones. Ambas ofrecen características distintas y son especialmente útiles en situaciones específicas.
          Funciones Anónimas: Una función anónima es aquella que no tiene un nombre identificador. Se definen directamente en el lugar donde se necesitan y, a menudo, se utilizan en situaciones como argumentos de otras funciones o para crear funciones dinámicamente. Las funciones anónimas son útiles cuando se necesita una función temporal sin asignarle un nombre específico.
          Funciones de Flecha: Las funciones de flecha son una sintaxis más concisa y moderna introducida en ECMAScript 6. Tienen una sintaxis más breve y no cambian el valor de this, lo que las hace convenientes en ciertos contextos. Las funciones de flecha son especialmente útiles cuando se trabaja con funciones de orden superior o cuando se necesita una función en un solo lugar sin afectar el ámbito de this.
          Diferencias Clave: Las funciones anónimas pueden tener un nombre asignado, pero su uso principal es en situaciones sin nombre explícito. Las funciones de flecha tienen una sintaxis más breve y no modifican el valor de this.
          Ambas son útiles en diferentes contextos, y la elección entre ellas depende del escenario específico en el que se utilicen. Elegir entre funciones anónimas y funciones de flecha dependerá de los requisitos y preferencias del desarrollo en un proyecto particular.`,
        "code": `
          // Función anónima asignada a una variable
          let suma = function (a, b) {
            return a + b;
          };

          console.log(suma(2, 3)); // Salida: 5

          // Función de flecha para multiplicar dos números
          let multiplicar = (a, b) => a * b;

          console.log(multiplicar(4, 5)); // Salida: 20
        `
      }
    ]
  },
  {
    "title": "Arreglos y Objetos",
    "content": [
      {
        "title": "Creación y manipulación de arreglos",
        "content": `En JavaScript, los arreglos son estructuras de datos que permiten almacenar y acceder a múltiples valores bajo un solo nombre. Estos son fundamentales para trabajar con conjuntos de datos y proporcionan una variedad de métodos para manipular su contenido.
          Existen varias formas de crear arreglos en JavaScript. La forma más común es utilizando la notación de corchetes []. También es posible utilizar el constructor Array(). Para acceder a elementos específicos de un arreglo, se utiliza la notación de corchetes junto con el índice del elemento.
          JavaScript proporciona una variedad de métodos para manipular arreglos, como push(), pop(), shift(), unshift(), splice(), entre otros. Es común utilizar bucles como for o métodos como forEach() para recorrer los elementos de un arreglo.`,
        "code": `
          // Creación de un arreglo de números
          let numeros = [1, 2, 3, 4, 5];

          // Creación de un arreglo de cadenas
          let frutas = ['manzana', 'banana', 'uva'];

          let miArreglo = new Array(1, 2, 3, 4, 5);

          console.log(numeros[2]); // Accede al tercer elemento (índice 2) del arreglo 'numeros'

          // Agregar un elemento al final del arreglo
          numeros.push(6);

          // Eliminar el último elemento del arreglo
          frutas.pop();

          // Agregar un elemento al inicio del arreglo
          frutas.unshift('kiwi');

          // Eliminar el primer elemento del arreglo
          numeros.shift();

          // Iteración con un bucle for
          for (let i = 0; i < numeros.length; i++) {
            console.log(numeros[i]);
          }

          // Iteración con forEach()
          frutas.forEach(fruta => {
            console.log(fruta);
          });
        `
      },
      {
        "title": "Métodos de arreglo",
        "content": `Los métodos de arreglo en JavaScript ofrecen potentes funcionalidades para manipular y transformar datos de manera eficiente. Entre los métodos más utilizados se encuentran map(), filter(), y reduce(), cada uno diseñado para realizar tareas específicas en arreglos.
          1. Método map(): El método map() permite crear un nuevo arreglo aplicando una función a cada elemento del arreglo original. Este método es útil para transformar cada elemento de un arreglo según una lógica específica.
          2. Método filter(): El método filter() crea un nuevo arreglo con elementos que cumplen una condición dada. Es útil para seleccionar elementos que satisfacen ciertos criterios.
          3. Método reduce(): El método reduce() aplica una función acumuladora a cada elemento del arreglo, reduciéndolos a un único valor. Se utiliza para operaciones que combinan todos los elementos en un resultado final.`,
        "code": `
          // Ejemplo de map: Duplicar cada número en el arreglo
          let numeros = [1, 2, 3, 4, 5];
          let duplicados = numeros.map(numero => numero * 2);

          console.log(duplicados); // Resultado: [2, 4, 6, 8, 10]

          // Ejemplo de filter: Filtrar números pares
          let numeros = [1, 2, 3, 4, 5];
          let pares = numeros.filter(numero => numero % 2 === 0);

          console.log(pares); // Resultado: [2, 4]

          // Ejemplo de reduce: Sumar todos los elementos del arreglo
          let numeros = [1, 2, 3, 4, 5];
          let sumaTotal = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

          console.log(sumaTotal); // Resultado: 15
        `
      },
      {
        "title": "Creación y manipulación de objetos",
        "content": `En JavaScript, los objetos son estructuras de datos fundamentales que permiten almacenar información en pares clave-valor. Estos objetos son versátiles y se utilizan para representar estructuras de datos más complejas y dinámicas.
          Creación de Objetos: Puedes crear un objeto en JavaScript utilizando la notación de llaves ({}) o mediante el uso del constructor Object().
          Acceso y Modificación de Propiedades: Para acceder a las propiedades de un objeto, utilizamos la notación de punto (objeto.propiedad) o la notación de corchetes (objeto['propiedad']).
          Métodos de Objeto: Los objetos en JavaScript también pueden contener funciones, conocidas como métodos. Estos métodos pueden realizar operaciones específicas asociadas al objeto.`,
        "code": `
          // Creación de un objeto con notación de llaves
          let persona = {
            nombre: 'Juan',
            edad: 25,
            ciudad: 'Ejemploville'
          };

          // Creación de un objeto con el constructor Object()
          let coche = new Object();
          coche.marca = 'Toyota';
          coche.modelo = 'Corolla';
          coche.año = 2022;

          // Acceso y modificación de propiedades
          console.log(persona.nombre); // Resultado: Juan

          coche['modelo'] = 'Camry';
          console.log(coche.modelo); // Resultado: Camry

          // Añadiendo un método al objeto persona
          persona.saludar = function() {
            console.log(\`Hola, soy \${this.nombre} y tengo \${this.edad} años.\`);
          };

          // Llamando al método
          persona.saludar(); // Resultado: Hola, soy Juan y tengo 25 años.
        `
      },
      {
        "title": "Propiedades y métodos de objetos",
        "content": `En JavaScript, los objetos son entidades flexibles que pueden contener tanto datos (propiedades) como funciones (métodos).
          Propiedades: Las propiedades son valores asociados a un objeto. Pueden representar datos diversos y se accede a ellas mediante la notación de punto o la notación de corchetes.
          Métodos: Los métodos son funciones asociadas a un objeto y pueden realizar acciones específicas relacionadas con ese objeto. Se definen de la misma manera que una función, pero se asocian a un objeto.
          Diferencia entre Propiedades y Métodos: La principal distinción radica en que las propiedades almacenan datos, mientras que los métodos realizan acciones. Ambos son esenciales para modelar la lógica y el comportamiento de los objetos en JavaScript.`,
        "code": `
          // Ejemplo de propiedades en un objeto
          let libro = {
            titulo: 'JavaScript 101',
            autor: 'Ejemplo Autor',
            añoPublicacion: 2022
          };

          console.log(libro.titulo); // Resultado: JavaScript 101
          console.log(libro['autor']); // Resultado: Ejemplo Autor

          // Ejemplo de método en un objeto
          let coche = {
            marca: 'Toyota',
            modelo: 'Corolla',
            encender: function() {
              console.log('El coche está encendido.');
            }
          };

          coche.encender(); // Resultado: El coche está encendido.
        `
      }
    ]
  },
  {
    "title": "DOM y Eventos",
    "content": [
      {
        "title": "Introducción al Document Object Model (DOM)",
        "content": `El Document Object Model (DOM) es una interfaz de programación que proporciona una representación estructurada y jerárquica de documentos HTML y XML. Esta sección aborda los conceptos básicos del DOM y su importancia en el desarrollo web.
          El DOM como Representación Estructurada: El DOM representa un documento como una estructura de árbol, donde cada elemento del documento se convierte en un nodo en el árbol. Esta estructura permite a los desarrolladores acceder, manipular y modificar los elementos y contenido de una página web de manera dinámica mediante JavaScript.
          Acceso y Manipulación con JavaScript: JavaScript interactúa con el DOM para realizar acciones como cambiar el contenido de un elemento, modificar atributos, agregar o eliminar elementos, y responder a eventos del usuario.
          Importancia en Desarrollo Web Dinámico: El DOM es fundamental para crear páginas web dinámicas e interactivas. Permite a los desarrolladores actualizar el contenido de una página en respuesta a acciones del usuario, como clics o envíos de formularios, sin necesidad de recargar la página completa.
          Eventos y Manejo de Eventos: El DOM facilita el manejo de eventos, como clics de ratón o pulsaciones de teclas. Los desarrolladores pueden asignar funciones (manejadores de eventos) a elementos específicos para responder a estas interacciones.`,
        "code": `
          // Ejemplo de acceso y manipulación del DOM
          let titulo = document.getElementById('miTitulo');
          titulo.innerHTML = 'Nuevo Título';

          // Ejemplo de manejo de eventos en el DOM
          let boton = document.getElementById('miBoton');
          boton.addEventListener('click', function() {
            alert('¡Botón clicado!');
          });
        `
      },
      {
        "title": "Manipulación del DOM con JavaScript",
        "content": `La manipulación del Document Object Model (DOM) mediante JavaScript es un aspecto crucial del desarrollo web. En esta sección, exploraremos cómo JavaScript se utiliza para alterar el contenido, la estructura y el estilo de una página web dinámicamente.
          Modificación del Contenido: JavaScript permite cambiar el contenido de elementos HTML de manera dinámica. Puedes actualizar el texto, atributos y más.
          Manipulación de la Estructura: Además de cambiar el contenido, JavaScript facilita la manipulación de la estructura del DOM. Puedes agregar, eliminar o reorganizar elementos según las necesidades de la aplicación.
          Ajuste de Estilos y Clases: JavaScript también permite ajustar estilos y clases para cambiar la apariencia de los elementos. Esto es útil para aplicar estilos personalizados o responder a eventos específicos.
          Creación de Elementos Dinámicamente: JavaScript posibilita la creación de nuevos elementos y su inserción en el DOM. Esto es esencial para construir interfaces de usuario dinámicas.`,
        "code": `
          // Ejemplo de modificación del contenido del DOM
          let parrafo = document.getElementById('miParrafo');
          parrafo.innerHTML = 'Nuevo contenido del párrafo';

          // Ejemplo de manipulación de la estructura del DOM
          let contenedor = document.getElementById('miContenedor');
          let nuevoElemento = document.createElement('div');
          nuevoElemento.textContent = 'Nuevo elemento';
          contenedor.appendChild(nuevoElemento);

          // Ejemplo de ajuste de estilos y clases en el DOM
          let miElemento = document.getElementById('miElemento');
          miElemento.style.color = 'blue';
          miElemento.classList.add('resaltado');

          // Ejemplo de creación de elementos dinámicamente
          let nuevoDiv = document.createElement('div');
          nuevoDiv.textContent = '¡Nuevo elemento creado!';
          document.body.appendChild(nuevoDiv);
        `
      },
      {
        "title": "Eventos y manejo de eventos",
        "content": ` En el desarrollo web, los eventos son fundamentales para interactuar con los usuarios y responder a sus acciones. JavaScript facilita la gestión de eventos, permitiendo que las páginas web reaccionen dinámicamente a diversas interacciones del usuario.
          Introducción a los Eventos: Los eventos pueden ser clics de ratón, pulsaciones de teclas, cambios en el contenido, entre otros. Cada elemento en una página web puede estar asociado a varios tipos de eventos.
          Tipos Comunes de Eventos:
          click: Ocurre cuando un elemento es clicado.
          keydown/keyup: Se dispara al presionar o soltar una tecla del teclado.
          change: Se activa cuando el valor de un elemento cambia, como en un campo de formulario.
          mouseover/mouseout: Ocurre cuando el ratón entra o sale de un elemento.
          Eventos y Funciones Personalizadas: Es común asociar eventos a funciones personalizadas para mantener un código organizado y reutilizable.`,
        "code": `
          // Ejemplo de manejo de eventos en el DOM
          let miBoton = document.getElementById('miBoton');

          miBoton.addEventListener('click', function() {
            alert('¡Botón clickeado!');
          });

          // Ejemplo de eventos con funciones personalizadas
          let miElemento = document.getElementById('miElemento');

          function resaltarElemento() {
            miElemento.style.color = 'red';
          }

          function restaurarColor() {
            miElemento.style.color = 'black';
          }

          miElemento.addEventListener('mouseover', resaltarElemento);
          miElemento.addEventListener('mouseout', restaurarColor);
        `
      }
    ]
  },
  {
    "title": "AJAX y Promesas",
    "content": [
      {
        "title": "Introducción a AJAX",
        "content": `AJAX, que significa Asynchronous JavaScript and XML, es una tecnología fundamental en el desarrollo web moderno. Esta técnica permite realizar peticiones asíncronas al servidor, permitiendo la actualización de contenido de una página sin necesidad de recargarla por completo. Aunque el nombre sugiere la utilización de XML, en la práctica, se emplea más comúnmente JSON debido a su formato ligero y fácil manejo.
          Principales Características de AJAX:
          Asincronía: AJAX permite realizar solicitudes al servidor de forma asíncrona. Esto significa que la ejecución del código JavaScript no se bloquea mientras espera la respuesta del servidor, lo que mejora significativamente la experiencia del usuario.
          Actualización Dinámica: La capacidad de actualizar partes específicas de una página sin recargarla por completo es una de las características más destacadas de AJAX. Esto se traduce en interfaces de usuario más rápidas y receptivas.
          Manipulación del DOM: Una vez que se obtiene la respuesta del servidor, JavaScript puede manipular el DOM para actualizar el contenido de la página según sea necesario. Esta capacidad es esencial para crear aplicaciones web dinámicas.
          En el ejemplo, se utiliza XMLHttpRequest para realizar una solicitud GET asíncrona al servidor. Al recibir la respuesta, se realiza el manejo correspondiente. Hoy en día, la mayoría de las aplicaciones web modernas utilizan bibliotecas o frameworks como Axios o el objeto fetch para simplificar aún más el uso de AJAX.`,
        "code": `
          // Ejemplo de solicitud AJAX con XMLHttpRequest
          let xhr = new XMLHttpRequest();

          xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
              // Manejar la respuesta del servidor
              let respuesta = JSON.parse(xhr.responseText);
              console.log(respuesta);
            }
          };

          // Configurar y enviar la solicitud GET al servidor
          xhr.open('GET', 'mi_servicio_web.json', true);
          xhr.send();
        `
      },
      {
        "title": "Realización de peticiones HTTP con JavaScript",
        "content": `La capacidad de realizar peticiones HTTP desde el lado del cliente es esencial para interactuar con servicios web y obtener o enviar datos de manera asíncrona. En JavaScript, esta funcionalidad se logra comúnmente a través de tecnologías como AJAX, Fetch API o bibliotecas como Axios. Aquí exploramos cómo JavaScript puede realizar peticiones HTTP asincrónicas para obtener o enviar datos.
          Fetch API: La Fetch API es una interfaz moderna y poderosa para realizar peticiones HTTP. Su sintaxis es más limpia y amigable que la antigua XMLHttpRequest.
          Axios: Axios es una biblioteca popular para realizar peticiones HTTP en JavaScript. Ofrece una interfaz simple y promesas para manejar las respuestas.
          Ambos ejemplos muestran cómo JavaScript puede realizar solicitudes HTTP para obtener datos desde un servidor. Estas solicitudes pueden ser de diferentes tipos, como GET, POST, PUT o DELETE, según la acción requerida. La asincronía de estas operaciones es fundamental para no bloquear la ejecución del código y mantener la fluidez de la interfaz de usuario.
          Importancia de las Peticiones HTTP Asincrónicas: La asincronía en las peticiones HTTP permite que la interfaz de usuario siga siendo altamente receptiva mientras se obtienen datos del servidor en segundo plano. Esto mejora la experiencia del usuario al evitar bloqueos y permitir actualizaciones dinámicas de contenido sin recargar la página completa.`,
        "code": `
          // Ejemplo de solicitud GET con Fetch API
          fetch('https://api.ejemplo.com/data')
            .then(response => response.json())
            .then(data => {
              // Manejar los datos obtenidos
              console.log(data);
            })
            .catch(error => {
              // Manejar errores
              console.error('Error en la solicitud:', error);
            });

          // Ejemplo de solicitud GET con Axios
          axios.get('https://api.ejemplo.com/data')
            .then(response => {
              // Manejar los datos obtenidos
              console.log(response.data);
            })
            .catch(error => {
              // Manejar errores
              console.error('Error en la solicitud:', error);
            });
        `
      },
      {
        "title": "Promesas y manejo asíncrono",
        "content": `En JavaScript, las promesas son una característica clave para gestionar operaciones asíncronas de manera más clara y eficiente. Representan un valor que puede estar disponible ahora, en el futuro o nunca. El manejo de promesas es esencial para trabajar con operaciones que llevan tiempo, como la carga de recursos externos o las solicitudes a servidores.
          Creación de una Promesa: Las promesas se crean utilizando el constructor Promise, que toma una función ejecutora con dos parámetros: resolve y reject. La función ejecutora contiene la lógica asíncrona y determina si la promesa se resuelve con éxito (resolve) o se rechaza (reject).
          Manejo de Promesas: El manejo de promesas se realiza mediante los métodos .then() para el caso de resolución y .catch() para el caso de rechazo. Estos métodos permiten encadenar operaciones asíncronas de manera más clara y estructurada.
          Async/Await: La introducción de async y await en ECMAScript 2017 simplifica aún más el manejo de operaciones asíncronas. Al marcar una función con async, permite el uso de await dentro de esa función para esperar la resolución de una promesa.`,
        "code": `
          // Ejemplo de creación de una promesa
          const miPromesa = new Promise((resolve, reject) => {
            // Simulación de una operación asíncrona
            setTimeout(() => {
              const exito = true; // Cambiar a false para simular un fallo
              if (exito) {
                resolve("La operación se completó con éxito.");
              } else {
                reject("La operación falló.");
              }
            }, 2000); // Simular una espera de 2 segundos
          });

          // Manejo de la promesa
          miPromesa
            .then(resultado => {
              console.log("Éxito:", resultado);
            })
            .catch(error => {
              console.error("Error:", error);
            });

          // Uso de async/await
          async function operacionAsincrona() {
            try {
              const resultado = await miPromesa;
              console.log("Éxito:", resultado);
            } catch (error) {
              console.error("Error:", error);
            }
          }

          // Llamada a la función
          operacionAsincrona();
        `
      }
    ]
  },
  {
    "title": "Programación Orientada a Objetos (OOP)",
    "content": [
      {
        "title": "Conceptos básicos de OOP",
        "content": `La Programación Orientada a Objetos (OOP) es un paradigma de programación que se basa en la idea de organizar el código en unidades llamadas objetos. Cada objeto representa una instancia única de una clase, que actúa como un plano para definir las propiedades y comportamientos compartidos.
          1. Clases y Objetos:
          Clase: Una plantilla o plano para crear objetos. Define las propiedades y métodos que los objetos de esa clase tendrán.
          Objeto: Una instancia única de una clase. Los objetos tienen propiedades que almacenan datos y métodos que definen su comportamiento.
          2. Encapsulamiento: Consiste en encapsular los detalles internos de un objeto y ocultar su complejidad al exterior. Solo se exponen los aspectos necesarios para interactuar con el objeto.
          3. Herencia: Permite a una clase heredar propiedades y métodos de otra clase. La clase que hereda se llama subclase, y la clase de la que hereda se llama superclase.
          4. Polimorfismo: Permite a objetos de diferentes clases responder al mismo método de manera diferente. Facilita la reutilización del código y la flexibilidad en el diseño.`,
        "code": `
          // Definición de una clase en JavaScript
          class Animal {
            constructor(nombre, edad) {
              this.nombre = nombre;
              this.edad = edad;
            }

            // Método de la clase
            saludar() {
              console.log(\`Hola, soy \${this.nombre} y tengo \${this.edad} años.\`);
            }
          }

          // Creación de un objeto de la clase Animal
          const miMascota = new Animal("Firulais", 3);

          // Llamada al método del objeto
          miMascota.saludar();
        `
      },
      {
        "title": "Creación de clases y objetos en JavaScript",
        "content": `En JavaScript, la creación de clases y objetos es fundamental para aplicar principios de Programación Orientada a Objetos (OOP).
          1. Definición de Clases: En JavaScript, puedes definir una clase utilizando la palabra clave class. Una clase puede tener un constructor para inicializar propiedades y métodos para definir el comportamiento.
          2. Creación de Objetos: Los objetos se crean a partir de una clase utilizando la palabra clave new. Esto instancia la clase y devuelve un objeto que hereda propiedades y métodos de la clase.
          3. Herencia: JavaScript admite herencia entre clases. Puedes extender una clase existente para crear una nueva clase que herede sus propiedades y métodos.
          4. Principios de OOP: La creación de clases y objetos en JavaScript permite aplicar principios como encapsulamiento, herencia y polimorfismo. Estos principios mejoran la modularidad y la reutilización del código.`,
        "code": `
          // Definición de una clase en JavaScript
          class Persona {
            constructor(nombre, edad) {
              this.nombre = nombre;
              this.edad = edad;
            }

            saludar() {
              console.log(\`Hola, soy \${this.nombre} y tengo \${this.edad} años.\`);
            }
          }

          // Creación de objetos a partir de la clase Persona
          const persona1 = new Persona("Juan", 25);
          const persona2 = new Persona("María", 30);

          // Clase que hereda de Persona
          class Estudiante extends Persona {
            constructor(nombre, edad, curso) {
              super(nombre, edad); // Llama al constructor de la clase padre
              this.curso = curso;
            }

            estudiar() {
              console.log(\`\${this.nombre} está estudiando en el curso \${this.curso}.\`);
            }
          }

          // Creación de un objeto Estudiante
          const estudiante1 = new Estudiante("Ana", 22, "Programación");
        `
      },
      {
        "title": "Herencia y encapsulamiento en JavaScript",
        "content": `La herencia y el encapsulamiento son conceptos fundamentales en Programación Orientada a Objetos (OOP) que ofrecen una mayor organización y reutilización del código en JavaScript.
          Herencia en JavaScript: La herencia permite que una clase (subclase) herede propiedades y métodos de otra clase (superclase). En JavaScript, esto se logra mediante la palabra clave extends.
          Encapsulamiento en JavaScript: El encapsulamiento se refiere a la capacidad de ocultar detalles internos de una clase y proporcionar una interfaz para interactuar con ella. En JavaScript, el encapsulamiento se logra mediante el uso de métodos y propiedades privadas. El encapsulamiento ayuda a controlar el acceso a los datos internos de una clase, mejorando la modularidad y la seguridad del código.`,
        "code": `
          // Definición de una superclase (Padre)
          class Animal {
            constructor(nombre) {
              this.nombre = nombre;
            }

            emitirSonido() {
              console.log("Haciendo sonidos...");
            }
          }

          // Definición de una subclase (Hijo) que hereda de Animal
          class Perro extends Animal {
            constructor(nombre, raza) {
              super(nombre); // Llama al constructor de la superclase
              this.raza = raza;
            }

            ladrar() {
              console.log("¡Guau, guau!");
            }
          }

          // Creación de un objeto de la subclase Perro
          const miPerro = new Perro("Buddy", "Labrador");
          miPerro.emitirSonido(); // Heredado de la superclase Animal
          miPerro.ladrar();       // Propio de la subclase Perro

          // Ejemplo de encapsulamiento en JavaScript
          class CuentaBancaria {
            #saldo = 0; // Propiedad privada

            constructor(titular) {
              this.titular = titular;
            }

            depositar(monto) {
              this.#saldo += monto;
              console.log(\`Depósito de \${monto} realizado. Saldo actual: \${this.#saldo}\`);
            }

            retirar(monto) {
              if (monto <= this.#saldo) {
                this.#saldo -= monto;
                console.log(\`Retiro de \${monto} realizado. Saldo actual: \${this.#saldo}\`);
              } else {
                console.log("Saldo insuficiente.");
              }
            }
          }

          // Creación de un objeto de la clase CuentaBancaria
          const miCuenta = new CuentaBancaria("Juan");
          miCuenta.depositar(1000);
          miCuenta.retirar(500);
        `
      }
    ]
  }
];

let unitsDataRetos: Unit[] = [
  {
    "title": "Introducción a JavaScript",
    "content": [
      {
        "title": "Historia y origen de JavaScript",
        "content": `JavaScript, a menudo abreviado como JS, es un lenguaje de programación de alto nivel, interpretado y orientado a objetos. Fue creado por Brendan Eich mientras trabajaba en Netscape Communications Corporation en 1995. La necesidad de un lenguaje que permitiera a los desarrolladores agregar interactividad a las páginas web llevó al desarrollo de JavaScript.
          Nacimiento en Netscape: JavaScript se diseñó originalmente para ser utilizado en el navegador Netscape Navigator. Su objetivo era proporcionar a los desarrolladores la capacidad de manipular elementos de una página web y realizar acciones del lado del cliente de manera dinámica.
          Influencias y Evolución: JavaScript tomó prestadas muchas características de otros lenguajes de programación, como Java y C. Aunque su nombre sugiere una relación con Java, ambos lenguajes son distintos y se utilizan para diferentes propósitos.
          Estándares y Comités: A medida que JavaScript ganó popularidad, se formaron estándares para garantizar su interoperabilidad entre diferentes navegadores. Actualmente, la especificación ECMAScript define el estándar de JavaScript, y el desarrollo y la evolución de JavaScript son gestionados por el Comité Técnico ECMA/TC39.`,
        "code": `// Escribe el código necesario para que, al ejecutar el programa, se imprima "Hola, mundo!" en la consola.
        `
      },
      {
        "title": "Características y usos de JavaScript",
        "content": `JavaScript se ha consolidado como uno de los lenguajes de programación más utilizados en el desarrollo web y más allá. Sus características y usos abarcan una variedad de áreas, lo que contribuye a su versatilidad y relevancia.
          Lenguaje Interpretado: JavaScript es un lenguaje interpretado, lo que significa que se ejecuta directamente en el navegador sin necesidad de compilación. Esto facilita el desarrollo y la depuración.
          Orientado a Objetos: JavaScript es un lenguaje orientado a objetos, lo que implica que se basa en la idea de objetos que pueden contener datos y funciones. La programación orientada a objetos permite la reutilización de código y la organización eficiente del mismo.
          Dinámico y Débilmente Tipado: JavaScript es dinámico, lo que significa que las variables no están vinculadas a un tipo específico y pueden cambiar durante la ejecución del programa. Además, es débilmente tipado, lo que permite realizar operaciones sin la necesidad de declarar explícitamente el tipo de datos.
          Interactividad en el Navegador: La principal aplicación de JavaScript es la mejora de la interactividad en las páginas web. Puede manipular el DOM para cambiar el contenido de la página, gestionar eventos del usuario y realizar solicitudes asíncronas al servidor.
          Compatibilidad con Múltiples Plataformas: JavaScript se ejecuta en todos los navegadores modernos, lo que garantiza la portabilidad y la compatibilidad con diversas plataformas.`,
        "code": `// Declara una variable llamada edad con el valor inicial de 30 y otra variable llamada incremento con el valor de 5. Luego, incrementa la variable edad por el valor de incremento y muestra la nueva edad usando console.log.
        `
      },
      {
        "title": "Configuración del entorno de desarrollo",
        "content": `Configurar un entorno de desarrollo adecuado es esencial para comenzar a programar en JavaScript de manera eficiente. Aquí hay algunos pasos clave para establecer un entorno de desarrollo sólido.
          Navegador Web: JavaScript se ejecuta en el navegador, por lo que necesitarás uno para probar y depurar tu código. Los navegadores populares como Google Chrome, Mozilla Firefox o Microsoft Edge son opciones comunes.
          Editor de Código: Elige un editor de código que se adapte a tus preferencias. Algunos ejemplos populares incluyen Visual Studio Code, Atom o Sublime Text. Estos editores proporcionan funciones avanzadas que facilitan la escritura y el mantenimiento del código.
          Node.js y npm: Node.js es un entorno de ejecución de JavaScript del lado del servidor. Además, npm (Node Package Manager) te permitirá gestionar las dependencias y paquetes de JavaScript en tu proyecto.
          Sistema de Control de Versiones: Utilizar un sistema de control de versiones como Git es esencial para realizar un seguimiento de los cambios en tu código y colaborar con otros desarrolladores. Plataformas como GitHub, GitLab o Bitbucket pueden alojar tus repositorios Git de forma remota.
          Consola del Navegador: Las consolas de desarrollo de los navegadores son herramientas valiosas para la depuración y visualización de mensajes de registro. Aprender a utilizar la consola te permitirá identificar errores y realizar pruebas rápidas.`,
        "code": `// Importa el archivo JavaScript en el archivo HTML.
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi Primer Proyecto JavaScript</title>
</head>
<body>
  <h1>Hola, Mundo!</h1>
  // Tu código aquí
</body>
</html>
        `
      }
    ]
  },
  {
    "title": "Variables y Tipos de Datos",
    "content": [
      {
        "title": "Declaración de variables",
        "content": `La declaración de variables es fundamental en cualquier lenguaje de programación, y JavaScript no es una excepción.
          Palabras Clave: En JavaScript, utilizamos las palabras clave var, let y const para declarar variables. La elección de la palabra clave depende de la naturaleza de la variable y el ámbito en el que se utilizará.
          var: Antes de la introducción de let y const, var era la única forma de declarar variables en JavaScript. Sin embargo, tiene un comportamiento peculiar relacionado con el ámbito, por lo que se prefiere el uso de let y const en la mayoría de los casos.
          let y const: Estas son las formas modernas de declarar variables. let se utiliza para variables que pueden cambiar su valor, mientras que const se usa para variables constantes cuyo valor no cambia una vez asignado.`,
        "code": `// Proporciona ejemplos de declaración de variables utilizando var, let y const, declara una variable sin asignar un valor inicial. Imprimelas en la consola.
        `
      },
      {
        "title": "Tipos de datos en JavaScript",
        "content": `En JavaScript, los tipos de datos son las características fundamentales que le dan significado y valor a las variables. Aquí se presentan algunos de los tipos de datos más comunes en JavaScript:
          Números (Numbers): Representan valores numéricos. Pueden ser enteros o decimales.
          Cadenas de Texto (Strings): Representan secuencias de caracteres. Se crean utilizando comillas simples ('') o dobles ("").
          Booleanos (Booleans): Representan valores de verdad o falsedad (true o false).
          Objetos (Objects): Representan colecciones de propiedades y métodos. Se crean utilizando llaves {}.
          Arreglos (Arrays): Representan listas ordenadas de valores. Se crean utilizando corchetes [].`,
        "code": `// Crea una variable de tipo número, una de tipo string, una de tipo boolean y muéstralas por consola.
        `
      },
      {
        "title": "Conversión entre tipos de datos",
        "content": `En JavaScript, la conversión entre diferentes tipos de datos es una tarea común y puede ser necesaria en diversas situaciones. A continuación, se presentan algunas formas de realizar conversiones entre tipos de datos:
          Coerción Implícita: JavaScript realiza automáticamente conversiones implícitas cuando se mezclan diferentes tipos de datos en una operación. Por ejemplo, concatenar una cadena con un número.
          Métodos de Conversión: JavaScript proporciona métodos específicos para convertir valores de un tipo a otro. Algunos de estos métodos son String(), Number(), y Boolean().`,
        "code": `// Completa el código

// Coerción Implícita
let numero = 5;
// Tu código aquí

// Métodos de Conversión
let cadenaNumero = "123";
// Tu código aquí

console.log(typeof cadenaNumero);
console.log(typeof numeroConvertido);

// Conversión a Cadenas
let num = 42;
// Tu código aquí

console.log(typeof num);
console.log(typeof cadenaNum);
        `
      }
    ]
  },
  {
    "title": "Operadores y Expresiones",
    "content": [
      {
        "title": "Operadores aritméticos, de asignación y lógicos",
        "content": `En JavaScript, los operadores son símbolos especiales que realizan operaciones en operandos. Aquí se presentan tres tipos principales de operadores: aritméticos, de asignación y lógicos.
          Operadores Aritméticos: Estos operadores se utilizan para realizar operaciones matemáticas básicas.
          Suma (+): Suma dos operandos.
          Resta (-): Resta el segundo operando del primero.
          Multiplicación (*): Multiplica dos operandos.
          División (/): Divide el primer operando por el segundo.
          Módulo (%): Devuelve el resto de la división del primer operando por el segundo.
          Operadores de Asignación: Estos operadores se utilizan para asignar valores a variables.
          Asignación (=): Asigna el valor del lado derecho al lado izquierdo.
          Adición y asignación (+=): Incrementa la variable con el valor especificado.
          Sustracción y asignación (-=): Decrementa la variable con el valor especificado.
          Multiplicación y asignación (*=): Multiplica la variable por el valor especificado.
          División y asignación (/=): Divide la variable por el valor especificado.
          Módulo y asignación (%=): Calcula el módulo de la variable por el valor especificado y asigna el resultado.
          Operadores Lógicos: Estos operadores se utilizan para realizar operaciones lógicas entre valores booleanos.
          AND lógico (&&): Devuelve true si ambos operandos son true.
          OR lógico (||): Devuelve true si al menos uno de los operandos es true.
          NOT lógico (!): Niega el valor de su operando.`,
        "code": `// Proporciona ejemplos de operadores de suma, resta, multiplicación, división y modulo en JavaScript

// Proporciona dos ejemplos de operadores lógicos.

        `
      },
      {
        "title": "Operadores de comparación",
        "content": `En JavaScript, los operadores de comparación se utilizan para comparar valores y devolver un resultado booleano (true o false) según la relación entre los operandos. Estos operadores son fundamentales para tomar decisiones condicionales en tus programas.
          Operadores de Comparación Comunes: Igual (==): Comprueba si dos valores son iguales, sin tener en cuenta el tipo de dato. (Ejemplo: a == b)
          Igualdad Estricta (===): Comprueba si dos valores son iguales, teniendo en cuenta el tipo de dato. (Ejemplo: a === b)
          No Igual (!=): Comprueba si dos valores no son iguales, sin tener en cuenta el tipo de dato. (Ejemplo: a != b)
          No Igualdad Estricta (!==): Comprueba si dos valores no son iguales, teniendo en cuenta el tipo de dato. (Ejemplo: a !== b)
          Mayor que (>): Comprueba si el valor de la izquierda es mayor que el valor de la derecha. (Ejemplo: a > b)
          Menor que (<): Comprueba si el valor de la izquierda es menor que el valor de la derecha. (Ejemplo: a < b)
          Mayor o Igual que (>=): Comprueba si el valor de la izquierda es mayor o igual que el valor de la derecha. (Ejemplo: a >= b)
          Menor o Igual que (<=): Comprueba si el valor de la izquierda es menor o igual que el valor de la derecha. (Ejemplo: a <= b)`,
        "code": `// Proporciona 5 ejemplos de operadores de comparación diferentes.

        `
      },
      {
        "title": "Expresiones y evaluación",
        "content": `En JavaScript, las expresiones son combinaciones de valores y operadores que pueden evaluarse para producir un resultado. Las expresiones pueden ser tan simples como una única variable o tan complejas como una serie de operaciones matemáticas y lógicas.
          Tipos de Expresiones:
          Expresiones Aritméticas: Realizan operaciones matemáticas como suma, resta, multiplicación y división. Ejemplo: let resultado = 10 + 5 * 2;
          Expresiones de Cadena: Concatenan cadenas de texto utilizando el operador de concatenación (+). Ejemplo: let saludo = "Hola, " + "Mundo";
          Expresiones de Comparación: Utilizan operadores de comparación para evaluar condiciones y producir un valor booleano. Ejemplo: let esMayor = 20 > 10;
          Expresiones Lógicas: Combinan valores booleanos utilizando operadores lógicos como AND (&&) y OR (||). Ejemplo: let resultadoLogico = true && false;
          Evaluación de Expresiones: La evaluación de una expresión implica calcular su valor resultante. Esto se realiza siguiendo las reglas de precedencia de operadores y asegurándose de que las operaciones se realicen en el orden correcto.`,
        "code": `// Proporciona ejemplos de expresiones y evaluación en JavaScript

// Expresiones aritméticas
// Tu código aquí

// Expresiones de cadena
// Tu código aquí

// Expresiones de comparación
// Tu código aquí

// Expresiones lógicas
// Tu código aquí
        `
      }
    ]
  },
  {
    "title": "Estructuras de Control",
    "content": [
      {
        "title": "Condicionales",
        "content": `Las estructuras condicionales en JavaScript son fundamentales para controlar el flujo de ejecución del programa en función de condiciones específicas. Estas estructuras permiten que un bloque de código se ejecute solo si una condición dada es verdadera.
          if Statement: Utilizado para ejecutar un bloque de código si la condición proporcionada es verdadera.
          Sintaxis:
          if (condicion) {
            // Código a ejecutar si la condición es verdadera
          }
          else if Statement: Se utiliza después de un bloque if para comprobar condiciones adicionales si la primera es falsa.
          Sintaxis:
          if (condicion) {
            // Código a ejecutar si la condición es verdadera
          } else if (otraCondicion) {
            // Código a ejecutar si la otra condición es verdadera
          }
          else Statement: Se ejecuta si la condición en el bloque if y todas las condiciones en bloques else if son falsas.
          Sintaxis:
          if (condicion) {
            // Código a ejecutar si la condición es verdadera
          } else {
            // Código a ejecutar si la condición es falsa
          }
          switch Statement: Se utiliza para evaluar una expresión y ejecutar bloques de código según los casos coincidentes.
          Sintaxis:
          switch (expresion) {
            case valor1:
              // Código a ejecutar si la expresión coincide con valor1
              break;
            case valor2:
              // Código a ejecutar si la expresión coincide con valor2
              break;
            default:
              // Código a ejecutar si la expresión no coincide con ningún caso
          }`,
        "code": `// Completa if Statement
let edad = 18;
// Tu código aquí

// Completa else if Statement
let hora = 14;
// Tu código aquí

// Completa else Statement
let numero = 0;
// Tu código aquí

// Completa switch Statement
let dia = "Lunes";
// Tu código aquí
        `
      },
      {
        "title": "Bucles",
        "content": `Los bucles en JavaScript son estructuras que permiten repetir la ejecución de un bloque de código mientras se cumpla una condición específica. Los bucles más comunes son for, while, y do-while.
          for Loop: Utilizado para repetir un bloque de código un número específico de veces.
          Sintaxis:
          for (inicialización; condición; actualización) {
            // Código a ejecutar en cada iteración
          }
          while Loop: Repite un bloque de código mientras una condición sea verdadera.
          Sintaxis:
          while (condición) {
            // Código a ejecutar mientras la condición sea verdadera
          }
          do-while Loop: Similar al while loop, pero garantiza que el bloque de código se ejecute al menos una vez, incluso si la condición es falsa.
          Sintaxis:
          do {
            // Código a ejecutar al menos una vez
          } while (condición);`,
        "code": `// Proporciona un ejemplo de for Loop
// Tu código aquí

// Completa el while Loop
let contador = 0;
// Tu código aquí

// Completa el do-while Loop
let num = 1;
do {
  // Tu código aquí
} while (num <= 3);
        `
      },
      {
        "title": "Control de flujo",
        "content": `El control de flujo en JavaScript se refiere a la gestión y dirección del flujo de ejecución de un programa. Dos sentencias clave para controlar este flujo son break y continue.
          break: La sentencia break se utiliza para salir de un bucle o de una estructura de control de flujo. Puede usarse en bucles for, while, y do-while, así como en estructuras condicionales como switch.
          continue: La sentencia continue se utiliza para omitir la parte restante de un bucle y pasar a la siguiente iteración. Similar a break, puede usarse en bucles for, while, y do-while.`,
        "code": `// Completa el código

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    // Tu código aquí
  }
  console.log("Iteración " + (i + 1));
}

for (let i = 0; i < 5; i++) {
  if (i === 2) {
    // Tu código aquí
  }
  console.log("Iteración " + (i + 1));
}
        `
      }
    ]
  },
  {
    "title": "Funciones",
    "content": [
      {
        "title": "Declaración y llamada de funciones",
        "content": `En JavaScript, las funciones son bloques de código reutilizables que te permiten encapsular una pieza específica de lógica y ejecutarla en cualquier momento. Las funciones son fundamentales para organizar y estructurar el código.
          JavaScript admite varios tipos de funciones, desde las declarativas más tradicionales hasta las modernas funciones de flecha introducidas en ECMAScript 6 (ES6). Las funciones también pueden ser anónimas o nombradas, proporcionando flexibilidad en la forma en que se definen y utilizan.
          Además, JavaScript permite el concepto de funciones como ciudadanos de primera clase, lo que significa que las funciones pueden asignarse a variables, pasarse como argumentos a otras funciones y devolverse como valores desde otras funciones. Un aspecto destacado es el alcance de las variables dentro de las funciones, conocido como ámbito.
          JavaScript implementa el ámbito léxico, lo que implica que una función puede acceder a las variables definidas en su entorno de declaración y también a las variables de funciones externas. Este comportamiento influye en cómo se diseñan las funciones y cómo se gestionan las variables a lo largo del código.`,
        "code": `// Declara una función llamada greet y llámala con el argumento "John".

// Declara una función anónima asignada a una variable, llámala con el argumento "Alice".

// Declara una función de flecha, llámala con el argumento "Bob".

        `
      },
      {
        "title": "Parámetros y argumentos",
        "content": `Los parámetros en JavaScript son variables que se definen en la declaración de una función y actúan como marcadores de posición para los valores que la función espera recibir durante su invocación. Estos parámetros permiten que las funciones sean más flexibles y reutilizables, ya que pueden adaptarse a diferentes situaciones según los valores que se les proporcionen al llamarlas. Cuando declaramos una función con parámetros, estamos estableciendo la estructura que la función espera.
          Los argumentos, por otro lado, son los valores reales que se pasan a una función cuando esta se invoca. Estos valores pueden ser constantes, variables o expresiones. Las funciones pueden tener múltiples parámetros, y los argumentos deben coincidir en cantidad y orden con los parámetros esperados.
          JavaScript también admite la asignación de valores predeterminados a los parámetros, lo que permite que una función sea llamada incluso si no se proporcionan todos los argumentos. Además, la sintaxis de "rest" (...) permite manejar un número variable de argumentos como un arreglo.`,
        "code": `// Escríbe 2 funciones: una sin parámetros y la otra con 2 parámetros.
        `
      },
      {
        "title": "Ámbito de las variables (scope)",
        "content": `El ámbito en JavaScript se refiere a la región del código donde una variable puede ser declarada y accedida. Entender el ámbito es crucial para evitar problemas relacionados con la visibilidad y modificación de variables en diferentes partes de un programa. JavaScript tiene dos tipos principales de ámbito: ámbito global y ámbito local.
          Ámbito Global: Una variable declarada fuera de cualquier función o bloque de código tiene un ámbito global. Esto significa que puede ser accedida desde cualquier parte del código, ya sea dentro de funciones, bucles u otros bloques. Sin embargo, es importante tener precaución con las variables globales, ya que pueden ser modificadas accidentalmente desde cualquier lugar, lo que podría conducir a comportamientos inesperados.
          Ámbito Local: Una variable declarada dentro de una función o bloque de código tiene un ámbito local. Esto significa que solo puede ser accedida y modificada dentro de ese contexto específico. Las variables locales tienen la ventaja de no interferir con otras partes del programa y ayudan a mantener la encapsulación.
          Ámbito de Bloque (a partir de ECMAScript 6): Con la introducción de let y const en ECMAScript 6, se introdujo el ámbito de bloque. Las variables declaradas con let y const tienen un ámbito limitado al bloque en el que están definidas. Esto es útil para evitar la contaminación del ámbito global y garantizar la privacidad de las variables.`,
        "code": `// Completa el código

let variableGlobal = 'Soy global';

function mostrarVariableGlobal() {
  console.log(variableGlobal);
}

// Tu código aquí

function ejemploAmbitoLocal() {
  // Tu código aquí
}

ejemploAmbitoLocal();
// console.log(variableLocal); // Error: variableLocal no está definida fuera de la función

if (true) {
  // Tu código aquí
  console.log(variableBloque);
}

// console.log(variableBloque); // Error: variableBloque no está definida fuera del bloque
        `
      },
      {
        "title": "Funciones anónimas y funciones de flecha",
        "content": `En JavaScript, las funciones anónimas y las funciones de flecha son enfoques alternativos para definir funciones. Ambas ofrecen características distintas y son especialmente útiles en situaciones específicas.
          Funciones Anónimas: Una función anónima es aquella que no tiene un nombre identificador. Se definen directamente en el lugar donde se necesitan y, a menudo, se utilizan en situaciones como argumentos de otras funciones o para crear funciones dinámicamente. Las funciones anónimas son útiles cuando se necesita una función temporal sin asignarle un nombre específico.
          Funciones de Flecha: Las funciones de flecha son una sintaxis más concisa y moderna introducida en ECMAScript 6. Tienen una sintaxis más breve y no cambian el valor de this, lo que las hace convenientes en ciertos contextos. Las funciones de flecha son especialmente útiles cuando se trabaja con funciones de orden superior o cuando se necesita una función en un solo lugar sin afectar el ámbito de this.
          Diferencias Clave: Las funciones anónimas pueden tener un nombre asignado, pero su uso principal es en situaciones sin nombre explícito. Las funciones de flecha tienen una sintaxis más breve y no modifican el valor de this.
          Ambas son útiles en diferentes contextos, y la elección entre ellas depende del escenario específico en el que se utilicen. Elegir entre funciones anónimas y funciones de flecha dependerá de los requisitos y preferencias del desarrollo en un proyecto particular.`,
        "code": `// Crea un función anónima asignada a una variable

// Completa la función de flecha para multiplicar dos números
// Tu código aquí
console.log(multiplicar(4, 5));
        `
      }
    ]
  },
  {
    "title": "Arreglos y Objetos",
    "content": [
      {
        "title": "Creación y manipulación de arreglos",
        "content": `En JavaScript, los arreglos son estructuras de datos que permiten almacenar y acceder a múltiples valores bajo un solo nombre. Estos son fundamentales para trabajar con conjuntos de datos y proporcionan una variedad de métodos para manipular su contenido.
          Existen varias formas de crear arreglos en JavaScript. La forma más común es utilizando la notación de corchetes []. También es posible utilizar el constructor Array(). Para acceder a elementos específicos de un arreglo, se utiliza la notación de corchetes junto con el índice del elemento.
          JavaScript proporciona una variedad de métodos para manipular arreglos, como push(), pop(), shift(), unshift(), splice(), entre otros. Es común utilizar bucles como for o métodos como forEach() para recorrer los elementos de un arreglo.`,
        "code": `// Crea un arreglo de números

// Crea un arreglo de cadenas

// Agrega un elemento al final del arreglo

// Elimina el último elemento del arreglo

// Agrega un elemento al inicio del arreglo

// Elimina el primer elemento del arreglo

        `
      },
      {
        "title": "Métodos de arreglo",
        "content": `Los métodos de arreglo en JavaScript ofrecen potentes funcionalidades para manipular y transformar datos de manera eficiente. Entre los métodos más utilizados se encuentran map(), filter(), y reduce(), cada uno diseñado para realizar tareas específicas en arreglos.
          1. Método map(): El método map() permite crear un nuevo arreglo aplicando una función a cada elemento del arreglo original. Este método es útil para transformar cada elemento de un arreglo según una lógica específica.
          2. Método filter(): El método filter() crea un nuevo arreglo con elementos que cumplen una condición dada. Es útil para seleccionar elementos que satisfacen ciertos criterios.
          3. Método reduce(): El método reduce() aplica una función acumuladora a cada elemento del arreglo, reduciéndolos a un único valor. Se utiliza para operaciones que combinan todos los elementos en un resultado final.`,
        "code": `// Ejemplo de map: Duplíca cada número en el arreglo
let numeros = [1, 2, 3, 4, 5];
// Tu código aquí
console.log(duplicados);

// Ejemplo de filter: Fíltra números pares
let numeros = [1, 2, 3, 4, 5];
// Tu código aquí
console.log(pares);

// Ejemplo de reduce: Suma todos los elementos del arreglo
let numeros = [1, 2, 3, 4, 5];
// Tu código aquí
console.log(sumaTotal);
        `
      },
      {
        "title": "Creación y manipulación de objetos",
        "content": `En JavaScript, los objetos son estructuras de datos fundamentales que permiten almacenar información en pares clave-valor. Estos objetos son versátiles y se utilizan para representar estructuras de datos más complejas y dinámicas.
          Creación de Objetos: Puedes crear un objeto en JavaScript utilizando la notación de llaves ({}) o mediante el uso del constructor Object().
          Acceso y Modificación de Propiedades: Para acceder a las propiedades de un objeto, utilizamos la notación de punto (objeto.propiedad) o la notación de corchetes (objeto['propiedad']).
          Métodos de Objeto: Los objetos en JavaScript también pueden contener funciones, conocidas como métodos. Estos métodos pueden realizar operaciones específicas asociadas al objeto.`,
        "code": `// Crea un objeto persona con notación de llaves

// Crea un objeto coche con el constructor Object()

        `
      },
      {
        "title": "Propiedades y métodos de objetos",
        "content": `En JavaScript, los objetos son entidades flexibles que pueden contener tanto datos (propiedades) como funciones (métodos).
          Propiedades: Las propiedades son valores asociados a un objeto. Pueden representar datos diversos y se accede a ellas mediante la notación de punto o la notación de corchetes.
          Métodos: Los métodos son funciones asociadas a un objeto y pueden realizar acciones específicas relacionadas con ese objeto. Se definen de la misma manera que una función, pero se asocian a un objeto.
          Diferencia entre Propiedades y Métodos: La principal distinción radica en que las propiedades almacenan datos, mientras que los métodos realizan acciones. Ambos son esenciales para modelar la lógica y el comportamiento de los objetos en JavaScript.`,
        "code": `// Completa propiedades del objeto
let libro = {
  // Tu código aquí
};

// Completa el ejemplo de método en un objeto
let coche = {
  marca: 'Toyota',
  modelo: 'Corolla',
  // Tu código aquí
};

coche.encender();
        `
      }
    ]
  },
  {
    "title": "DOM y Eventos",
    "content": [
      {
        "title": "Introducción al Document Object Model (DOM)",
        "content": `El Document Object Model (DOM) es una interfaz de programación que proporciona una representación estructurada y jerárquica de documentos HTML y XML. Esta sección aborda los conceptos básicos del DOM y su importancia en el desarrollo web.
          El DOM como Representación Estructurada: El DOM representa un documento como una estructura de árbol, donde cada elemento del documento se convierte en un nodo en el árbol. Esta estructura permite a los desarrolladores acceder, manipular y modificar los elementos y contenido de una página web de manera dinámica mediante JavaScript.
          Acceso y Manipulación con JavaScript: JavaScript interactúa con el DOM para realizar acciones como cambiar el contenido de un elemento, modificar atributos, agregar o eliminar elementos, y responder a eventos del usuario.
          Importancia en Desarrollo Web Dinámico: El DOM es fundamental para crear páginas web dinámicas e interactivas. Permite a los desarrolladores actualizar el contenido de una página en respuesta a acciones del usuario, como clics o envíos de formularios, sin necesidad de recargar la página completa.
          Eventos y Manejo de Eventos: El DOM facilita el manejo de eventos, como clics de ratón o pulsaciones de teclas. Los desarrolladores pueden asignar funciones (manejadores de eventos) a elementos específicos para responder a estas interacciones.`,
        "code": `// Accede al elemento "titulo"
// Tu código aquí
titulo.innerHTML = 'Nuevo Título';

// Completa el ejemplo de manejo de eventos en el DOM
let boton = document.getElementById('miBoton');
boton.addEventListener('click', function() {
  // Tu código aquí
});
        `
      },
      {
        "title": "Manipulación del DOM con JavaScript",
        "content": `La manipulación del Document Object Model (DOM) mediante JavaScript es un aspecto crucial del desarrollo web. En esta sección, exploraremos cómo JavaScript se utiliza para alterar el contenido, la estructura y el estilo de una página web dinámicamente.
          Modificación del Contenido: JavaScript permite cambiar el contenido de elementos HTML de manera dinámica. Puedes actualizar el texto, atributos y más.
          Manipulación de la Estructura: Además de cambiar el contenido, JavaScript facilita la manipulación de la estructura del DOM. Puedes agregar, eliminar o reorganizar elementos según las necesidades de la aplicación.
          Ajuste de Estilos y Clases: JavaScript también permite ajustar estilos y clases para cambiar la apariencia de los elementos. Esto es útil para aplicar estilos personalizados o responder a eventos específicos.
          Creación de Elementos Dinámicamente: JavaScript posibilita la creación de nuevos elementos y su inserción en el DOM. Esto es esencial para construir interfaces de usuario dinámicas.`,
        "code": `// Completa el ejemplo de modificación del contenido del DOM
// Tu código aquí
parrafo.innerHTML = 'Nuevo contenido del párrafo';

// Completa el ejemplo de manipulación de la estructura del DOM
let contenedor = document.getElementById('miContenedor');
// Tu código aquí
nuevoElemento.textContent = 'Nuevo elemento';
// Tu código aquí

// Completa el ejemplo de ajuste de estilos y clases en el DOM
let miElemento = document.getElementById('miElemento');
miElemento.style.color = 'blue';
// Tu código aquí

// Completa el ejemplo de creación de elementos dinámicamente
let nuevoDiv = document.createElement('div');
nuevoDiv.textContent = '¡Nuevo elemento creado!';
// Tu código aquí
        `
      },
      {
        "title": "Eventos y manejo de eventos",
        "content": ` En el desarrollo web, los eventos son fundamentales para interactuar con los usuarios y responder a sus acciones. JavaScript facilita la gestión de eventos, permitiendo que las páginas web reaccionen dinámicamente a diversas interacciones del usuario.
          Introducción a los Eventos: Los eventos pueden ser clics de ratón, pulsaciones de teclas, cambios en el contenido, entre otros. Cada elemento en una página web puede estar asociado a varios tipos de eventos.
          Tipos Comunes de Eventos:
          click: Ocurre cuando un elemento es clicado.
          keydown/keyup: Se dispara al presionar o soltar una tecla del teclado.
          change: Se activa cuando el valor de un elemento cambia, como en un campo de formulario.
          mouseover/mouseout: Ocurre cuando el ratón entra o sale de un elemento.
          Eventos y Funciones Personalizadas: Es común asociar eventos a funciones personalizadas para mantener un código organizado y reutilizable.`,
        "code": `
          // Añade alert('¡Botón clickeado!') al botón
          let miBoton = document.getElementById('miBoton');
          // Tu código aquí

          // Completa el ejemplo de eventos con funciones personalizadas
          let miElemento = document.getElementById('miElemento');

          function resaltarElemento() {
            // Tu código aquí
          }

          function restaurarColor() {
            // Tu código aquí
          }

          miElemento.addEventListener('mouseover', resaltarElemento);
          miElemento.addEventListener('mouseout', restaurarColor);
        `
      }
    ]
  },
  {
    "title": "AJAX y Promesas",
    "content": [
      {
        "title": "Introducción a AJAX",
        "content": `AJAX, que significa Asynchronous JavaScript and XML, es una tecnología fundamental en el desarrollo web moderno. Esta técnica permite realizar peticiones asíncronas al servidor, permitiendo la actualización de contenido de una página sin necesidad de recargarla por completo. Aunque el nombre sugiere la utilización de XML, en la práctica, se emplea más comúnmente JSON debido a su formato ligero y fácil manejo.
          Principales Características de AJAX:
          Asincronía: AJAX permite realizar solicitudes al servidor de forma asíncrona. Esto significa que la ejecución del código JavaScript no se bloquea mientras espera la respuesta del servidor, lo que mejora significativamente la experiencia del usuario.
          Actualización Dinámica: La capacidad de actualizar partes específicas de una página sin recargarla por completo es una de las características más destacadas de AJAX. Esto se traduce en interfaces de usuario más rápidas y receptivas.
          Manipulación del DOM: Una vez que se obtiene la respuesta del servidor, JavaScript puede manipular el DOM para actualizar el contenido de la página según sea necesario. Esta capacidad es esencial para crear aplicaciones web dinámicas.
          En el ejemplo, se utiliza XMLHttpRequest para realizar una solicitud GET asíncrona al servidor. Al recibir la respuesta, se realiza el manejo correspondiente. Hoy en día, la mayoría de las aplicaciones web modernas utilizan bibliotecas o frameworks como Axios o el objeto fetch para simplificar aún más el uso de AJAX.`,
        "code": `
          // Completa el ejemplo de solicitud AJAX con XMLHttpRequest
          let xhr = new XMLHttpRequest();

          xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
              // Manejar la respuesta del servidor
              // Tu código aquí
              console.log(respuesta);
            }
          };

          // Configurar y enviar la solicitud GET al servidor
          // Tu código aquí
          xhr.send();
        `
      },
      {
        "title": "Realización de peticiones HTTP con JavaScript",
        "content": `La capacidad de realizar peticiones HTTP desde el lado del cliente es esencial para interactuar con servicios web y obtener o enviar datos de manera asíncrona. En JavaScript, esta funcionalidad se logra comúnmente a través de tecnologías como AJAX, Fetch API o bibliotecas como Axios. Aquí exploramos cómo JavaScript puede realizar peticiones HTTP asincrónicas para obtener o enviar datos.
          Fetch API: La Fetch API es una interfaz moderna y poderosa para realizar peticiones HTTP. Su sintaxis es más limpia y amigable que la antigua XMLHttpRequest.
          Axios: Axios es una biblioteca popular para realizar peticiones HTTP en JavaScript. Ofrece una interfaz simple y promesas para manejar las respuestas.
          Ambos ejemplos muestran cómo JavaScript puede realizar solicitudes HTTP para obtener datos desde un servidor. Estas solicitudes pueden ser de diferentes tipos, como GET, POST, PUT o DELETE, según la acción requerida. La asincronía de estas operaciones es fundamental para no bloquear la ejecución del código y mantener la fluidez de la interfaz de usuario.
          Importancia de las Peticiones HTTP Asincrónicas: La asincronía en las peticiones HTTP permite que la interfaz de usuario siga siendo altamente receptiva mientras se obtienen datos del servidor en segundo plano. Esto mejora la experiencia del usuario al evitar bloqueos y permitir actualizaciones dinámicas de contenido sin recargar la página completa.`,
        "code": `
          // Completa el ejemplo de solicitud GET con Fetch API
          fetch('https://api.ejemplo.com/data')
            // Tu código aquí
            .then(data => {
              // Manejar los datos obtenidos
              console.log(data);
            })
            .catch(error => {
              // Manejar errores
              // Tu código aquí
            });

          // Completa el ejemplo de solicitud GET con Axios
          axios.get('https://api.ejemplo.com/data')
            // Tu código aquí
            .catch(error => {
              // Manejar errores
              console.error('Error en la solicitud:', error);
            });
        `
      },
      {
        "title": "Promesas y manejo asíncrono",
        "content": `En JavaScript, las promesas son una característica clave para gestionar operaciones asíncronas de manera más clara y eficiente. Representan un valor que puede estar disponible ahora, en el futuro o nunca. El manejo de promesas es esencial para trabajar con operaciones que llevan tiempo, como la carga de recursos externos o las solicitudes a servidores.
          Creación de una Promesa: Las promesas se crean utilizando el constructor Promise, que toma una función ejecutora con dos parámetros: resolve y reject. La función ejecutora contiene la lógica asíncrona y determina si la promesa se resuelve con éxito (resolve) o se rechaza (reject).
          Manejo de Promesas: El manejo de promesas se realiza mediante los métodos .then() para el caso de resolución y .catch() para el caso de rechazo. Estos métodos permiten encadenar operaciones asíncronas de manera más clara y estructurada.
          Async/Await: La introducción de async y await en ECMAScript 2017 simplifica aún más el manejo de operaciones asíncronas. Al marcar una función con async, permite el uso de await dentro de esa función para esperar la resolución de una promesa.`,
        "code": `
          // Completa el ejemplo de creación de una promesa
          const miPromesa = new Promise((resolve, reject) => {
            // Tu código aquí
          });
        `
      }
    ]
  },
  {
    "title": "Programación Orientada a Objetos (OOP)",
    "content": [
      {
        "title": "Conceptos básicos de OOP",
        "content": `La Programación Orientada a Objetos (OOP) es un paradigma de programación que se basa en la idea de organizar el código en unidades llamadas objetos. Cada objeto representa una instancia única de una clase, que actúa como un plano para definir las propiedades y comportamientos compartidos.
          1. Clases y Objetos:
          Clase: Una plantilla o plano para crear objetos. Define las propiedades y métodos que los objetos de esa clase tendrán.
          Objeto: Una instancia única de una clase. Los objetos tienen propiedades que almacenan datos y métodos que definen su comportamiento.
          2. Encapsulamiento: Consiste en encapsular los detalles internos de un objeto y ocultar su complejidad al exterior. Solo se exponen los aspectos necesarios para interactuar con el objeto.
          3. Herencia: Permite a una clase heredar propiedades y métodos de otra clase. La clase que hereda se llama subclase, y la clase de la que hereda se llama superclase.
          4. Polimorfismo: Permite a objetos de diferentes clases responder al mismo método de manera diferente. Facilita la reutilización del código y la flexibilidad en el diseño.`,
        "code": `
          // Completa la clase Animal
          class Animal {
            constructor(nombre, edad) {
              // Tu código aquí
            }

          // Crea un objeto de la clase Animal
          // Tu código aquí

        `
      },
      {
        "title": "Creación de clases y objetos en JavaScript",
        "content": `En JavaScript, la creación de clases y objetos es fundamental para aplicar principios de Programación Orientada a Objetos (OOP).
          1. Definición de Clases: En JavaScript, puedes definir una clase utilizando la palabra clave class. Una clase puede tener un constructor para inicializar propiedades y métodos para definir el comportamiento.
          2. Creación de Objetos: Los objetos se crean a partir de una clase utilizando la palabra clave new. Esto instancia la clase y devuelve un objeto que hereda propiedades y métodos de la clase.
          3. Herencia: JavaScript admite herencia entre clases. Puedes extender una clase existente para crear una nueva clase que herede sus propiedades y métodos.
          4. Principios de OOP: La creación de clases y objetos en JavaScript permite aplicar principios como encapsulamiento, herencia y polimorfismo. Estos principios mejoran la modularidad y la reutilización del código.`,
        "code": `
          // Crea la clase Persona y 2 objetos a partir de ella.

          // Crea la clase Estudiante que hereda de Persona y 1 objeto Estudiante.

        `
      },
      {
        "title": "Herencia y encapsulamiento en JavaScript",
        "content": `La herencia y el encapsulamiento son conceptos fundamentales en Programación Orientada a Objetos (OOP) que ofrecen una mayor organización y reutilización del código en JavaScript.
          Herencia en JavaScript: La herencia permite que una clase (subclase) herede propiedades y métodos de otra clase (superclase). En JavaScript, esto se logra mediante la palabra clave extends.
          Encapsulamiento en JavaScript: El encapsulamiento se refiere a la capacidad de ocultar detalles internos de una clase y proporcionar una interfaz para interactuar con ella. En JavaScript, el encapsulamiento se logra mediante el uso de métodos y propiedades privadas. El encapsulamiento ayuda a controlar el acceso a los datos internos de una clase, mejorando la modularidad y la seguridad del código.`,
        "code": `
          // Completa la definición de una superclase (Padre)
          class Animal {
            // Tu código aquí

            emitirSonido() {
              console.log("Haciendo sonidos...");
            }
          }

          // Crea una subclase Perro que hereda de Animal
          // Tu código aquí

          const miPerro = new Perro("Buddy", "Labrador");
          miPerro.emitirSonido();
          miPerro.ladrar();

        `
      }
    ]
  }
];

export { unitsDataLearn };
export { unitsDataRetos };
