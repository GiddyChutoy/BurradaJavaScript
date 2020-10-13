class Animal{

    constructor(especie, habitat, edad){
        this.especie = especie;
        this.habitat = habitat;
        this.edad = edad;
    }
}

class AnimalDomestico extends Animal{

    constructor(especie, habitat, edad, nombre, identificador, vacunado){
        super(especie, habitat, edad);
        this.nombre = nombre;
        this.identificador = identificador;
        this.vacunado = vacunado;
    }

    getProperties = () => {
        let propiedades;
        propiedades = [this.especie, this.habitat, this.edad, this.nombre, this.identificador, this.vacunado];
        return propiedades;
    }
}

class AnimalSalvaje extends Animal{


    constructor(especie, habitat, edad, cautivo, pelifroExtincion){
        super(especie, habitat, edad);
        this.cautivo = cautivo;
        this.pelifroExtincion = pelifroExtincion;
    }

    getProperties = () => {
        let propiedades;
        propiedades = [this.especie, this.habitat, this.edad, this.cautivo, this.pelifroExtincion];
        return propiedades;
    
    }
}

var arrayAnimales = [];

function animalDomestico(){
    especie = prompt("Introduce la especie de tu animal: ");
    habitat = prompt("Introduce el habitat de tu animal: ");
    edad = prompt("Introduce la edad de tu animal: ");
    nombre = prompt("¿Cómo se llama tu mascota?");
    identificador = prompt("¿Cuál es el identificador de tu animal?");
    vacunado = prompt("¿Esta vacunado tu animal?");

    let x = new AnimalDomestico(especie, habitat, edad, nombre, identificador, vacunado);

    if(x.edad > 10){
        arrayAnimales[arrayAnimales.length -1] = x;
    }
}

function animalSalvaje(){
    especie = prompt("Introduce la especie de tu animal: ");
    habitat = prompt("Introduce el habitat de tu animal: ");
    edad = prompt("Introduce la edad de tu animal: ");
    cautivo = prompt("¿Está cautivo?");
    pelifroExtincion = prompt("¿Está en peligro de extinción?");

    let y = new AnimalSalvaje(especie, habitat, edad, cautivo, pelifroExtincion);

    if(y.edad > 10){
        arrayAnimales[arrayAnimales.length -1] = y;
    }
}

function mostrarAnimales(){
    
}