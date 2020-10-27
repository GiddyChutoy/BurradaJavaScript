let fechaNacimiento1 = new Date("1999-07-23");
let fechaNacimiento2 = new Date("fri,Jul 23,1999");

console.log(fechaNacimiento2);

console.log(fechaNacimiento1.getDay());

fechaNacimiento1.setFullYear(2020);
console.log(fechaNacimiento1);

console.log(fechaNacimiento1.getUTCDate());

let ahora = new Date();
console.log((ahora.getTime() - fechaNacimiento2.getTime()) / (1000 * 60 * 60 * 24));


//función que coge una fecha y le suma 1 a su valor
function nochevieja(){
    let nocheVieja = new Date("2077-11-31");
    console.log(nocheVieja);
    let valor=nocheVieja.getDate();
    nocheVieja.setDate(valor + 1);
    console.log(nocheVieja);
}

//fecha y hora de hoy en 5 formatos distintos
let fecha = new Date();
console-log(fecha.getDate);
console-log(fecha.getTime);
console-log(fecha.getUTCFullYear);
//console-log(fecha.);
//console-log(fecha.);