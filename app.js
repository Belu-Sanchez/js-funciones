// // alert ('hola');


// // function declarada
// console.log(suma());
// function suma(){
//      return 3 +3;
// };
// // console.log(suma());


// // function expresadas
// const sumaExpresada = function(){
//     return 4 + 4;
// };
// // console.log(sumaExpresada());

// // const resultadoDeSumaExpresada = sumaExpresada ();
// // document.write()


// // Function Flecha o arrowFuction
// // Estoy declarando mi funcion
// const sumaFlecha = () => {
//     const num1 = 5;
//     const num2 = 5;
//     const resultado = num1 + num2;
//     // console.log(num1);
//     return resultado;
//     // return 5 + 5;
// };
// aca inicializo mi function
// console.log(sumaFlecha());

// console.log(sumaFlecha());
// console.write(sumaFlecha());


// retorno implicito
// const sumaFlecha = () => 5 + 5;
// no lleva return porque solo se puede poner una funcion

// console.write(sumaFlecha());
// scope es lo q vive dentro de las {}

// Duración de vuelo 
// const primerEscala = prompt('cual es tu primer destino?');
// const escala1 = Number(prompt('cuanto tiempo se trada en la escala uno?'));

// const segundaEscala = prompt ('cual es tu segundo destino?');
// const escala2 = Number(prompt('cuanto tiempo se trada en la escala dos?'));

// const tercerEscala = prompt ('cuan es tu tercer destino?');
// const escala3 = Number(prompt('cuanto tiempo se trada en la escala tres?'));

// const horasTotales = escala1 + escala2 + escala3;

// const mensaje = `tienes tres escalas programas:

// primer escala:${primerEscala} y su duración es de: ${escala1} hrs
// segunda escala:${segundaEscala} y su duración es de: ${escala2} hrs
// tercera escala:${tercerEscala} y su duración es de: ${escala3} hrs

// El tiempo total de tu vuela será de ${horasTotales} hrs
// `

// alert(mensaje)

const num1 = Number(prompt('Dame el primer numero'));
const num2 = Number(prompt('Dame el segundo numero'));
console.log(suma(num1, num2));


// parametros

const suma = (num1, num2) => {
    return num1 + num2;
}
// argumentos
// console.log(suma(5, 3));
// console.log(suma(5, 8));
const suma = (num1, num2) => num1 +num2; // 8+8=16
                //16 , 3
let resultadoSuma = suma (num1, num2);
                            //16 , 3 =13
const restando = (resultadoSuma, number) => {
    return resultadoSuma - number
}
restando ('Este es el resultado de la resta'restando (resultadoSuma, 3)); //16

console.log ('Este es el resultado de suma'resultadoSuma); //13





// const suma(num1, num2) {
//     return num1 + num2;




let segundos = prompt('Ingrese la cantidad de segundos');
 let segAMin = parseInt(segundos /60); //minutos
 let seg = (segundos%60);
 let minAHoras = parseInt(segAMin/60);//horas
 let min = (segAMin%60)

alert(`Los ${segundos} segundos ingresados corresponden a ${minAHoras} horas, ${segAMin} minutos y ${seg} segundos.`)