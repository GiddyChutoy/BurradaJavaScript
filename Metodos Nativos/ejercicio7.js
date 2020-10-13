function calvaland(){
    var notas = prompt("Mete notas separadas por comas: ");
    var arrayNotas = notas.split(",");
    
    arrayNotas = arrayNotas.map(Barras => Number(Barras));
    var media = arrayNotas.reduce((n1, n2) => (n1 + n2))/arrayNotas.length;
    
    console.log(media.toFixed(1));
}


 function pajascu(numero){
    if(!isNaN(numero)){
        return numero * numero * numero;
    }else if(!isNaN(numero)){
        alert("Eso no es un numero entero");
        return false;
    }
 }