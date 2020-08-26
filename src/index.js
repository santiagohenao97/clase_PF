import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

console.log("Inmutabilidad");

let var1 = 2;
let var2 = var1;
var2 = 3;
var1 = 5;

console.log(var1);
console.log(var2);

let var3 = [2, 3];
let var4 = var3.slice();

console.log(var3);
console.log(var4);

console.log("Funciones puras");
//PURA
const num = 3;

function multiplicarPorDos(num) {
  return num * 2;
}

console.log(multiplicarPorDos(num));
console.log(multiplicarPorDos(num));
console.log(multiplicarPorDos(num));

//IMPURA

let totalCompra = 0;

function sumarPrecio(cantidad, valor) {
  return (totalCompra = totalCompra + cantidad * valor);
}

console.log(sumarPrecio(1, 100)); //100
console.log(sumarPrecio(1, 100)); //200
console.log(sumarPrecio(1, 100)); //300

//OTRO EJEMPLO

const array = [4, 5];

function sumaArray(arr) {
  const total = array.reduce(
    (acumulador, valorActual) => acumulador + valorActual
  );
  array.push(total);
  return array;
}

console.log(sumaArray(array));
console.log(sumaArray(array));

console.log("Hola");

const array2 = [4, 5];

function sumaArray2(arr) {
  const reductora = (acumulador, valorActual) => acumulador + valorActual;
  const total = array2.reduce(reductora);
  const result = array2.concat(total);
  return result;
}

console.log(sumaArray2(array2));
console.log(sumaArray2(array2));

function sumaCuadrados(num1, num2) {
  return num1 * num1 + num2 * num2;
}

console.log(sumaCuadrados(2, 3));

function suma(num1, num2) {
  return multiplicar(num1) + multiplicar(num2);
}

function multiplicar(num) {
  return num * num;
}
console.log(suma(2, 3));

console.log("funciones recursivas");

function factorial(n) {
  var res = 1;
  for (let i = n; i >= 1; i--) {
    res = res * i;
  }
  return res;
}

console.log(factorial(4));

function factorialR(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorialR(4));

console.log("Funciones de orden superior/ Callbacks");

//Map

let myArr = [2, 3, 4, 5, 6];

const multiplicacion = (n) => n * 2;
const multPorDos = myArr.map(multiplicacion);
console.log(myArr);
console.log(multPorDos);

const filtrado = myArr.filter((n) => n > 3);
console.log(filtrado);

const participativos = ["Juan José", "Juan José", "Santiago"];

const seleccionJ = participativos.filter((nombre) => nombre.charAt(0) === "J");
console.log(seleccionJ);
