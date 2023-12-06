/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   return array[0]
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   var distancia = array.length - 1;
    return array [distancia];
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   return  array.length 
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   var masUno = [];
   for(var i = 0; i < array.length; i++) {
       masUno[i] = array[i] + 1;
   }
   
   return masUno;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   
    return array.push(elemento)
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   return palabras.join (" ")
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   var contador= 0;
   for (var i = 0; i < array.length; i++) {
       var numero = array[i];
       if (numero=== elemento) {
           contador =contador +1;
       }  
   }   
    if (contador >0) {
       return  true;
    } else {
       return false;
    }
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   var suma = arrayOfNums.reduce(function (acumulador,elemento){
      return acumulador+elemento; 
  }); 
  return suma;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   var suma= 0;
   for (let index = 0; index < resultadosTest.length; index++) {
       suma = suma + resultadosTest[index];
   }
   return (suma/resultadosTest.length)
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   var numero= 0;
    for (let index = 0; index < arrayOfNums.length; index++) {
        var ban = arrayOfNums[index];
        if(ban >=numero){
            numero = ban;
        }
    }
    return numero ;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   var total = 1;
   if(arguments.length === 0){
        return 0;
   }else if (arguments.length === 1){

   return arguments[0];
   }else {
   for (var i = 0; i < arguments.length; i++){
       total = total * arguments[i];
   }
   return total;
   }
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   var contador =0;
   for (let i = 0; i < array.length; i++) {
      var bandera = array[i];
      if (bandera >18) {
         contador = contador +1;
      }
   }
   return contador;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   if (numeroDeDia === 7 || numeroDeDia ==1) {
    return "Es fin de semana"
} else {
    return "Es dia laboral"
}
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   var string = num.toString();
    if (string[0] === '9'){
        return true;
    } else {
        return false;
    }
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   for (let index = 0; index < array.length; index++) {
      var valor = array [index];
      if (array[0] !== array[index]) {
         return false ;
      }   
     }
     return true ;
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   var nuevoArray = [];
   for (var i = 0; i < array.length; i++) {
       if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
           nuevoArray.push(array[i])
       }
   }

   if (nuevoArray.length < 3){
       return 'No se encontraron los meses pedidos';
   }else {
       return nuevoArray;
   }
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   var mayor_de100 =[]
    var contador = 0;
    for (var index = 0; index < array.length; index++) {
        var element = array[index];
        
        if (element >100 && element <=200 ) {
            mayor_de100 [contador]= element   
            contador = contador+1;
        }   
    }
    return mayor_de100;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   var array = [];
    var suma = num;
    for (var i = 0; i < 10; i++) {
        suma = suma + 2;
        if (suma === i) break;
        else{
            array.push(suma);
        }

        if(i < 10) {
            return 'Se interrumpió la ejecución';
        } else {
            return array;
        }
    }
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};

