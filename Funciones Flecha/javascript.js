class LenguajeProg{
    

    constructor(nombre, fechaCreacion){
        this.nombre = nombre;
        this.categoria = "orientado a objetos";
        this.interpretado = false;
        this.fechaCreacion = fechaCreacion;
    }

    setCategoria = (cat) => this.categoria = cat;
    setInterpretado = (inter) => this.interpretado = inter;
    setNombre = (nom) => this.nombre = nom;
    setFechaCreacion = (fecha) => this.fechaCreacion = fecha;

    getInfoLenguaje = () => console.log("Nombre: " + this.nombre + 
                                        ", Categoría: " + this.categoria + 
                                        ", Interpretado: " + this.interpretado + 
                                        ", Fecha de creación: " + this.fechaCreacion);

}

var js = new LenguajeProg("JavaScript", 1980);
js.getInfoLenguaje();