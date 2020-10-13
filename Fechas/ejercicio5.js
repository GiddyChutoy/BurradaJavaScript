class Fecha{
    constructor(dia, mes, ano){
        this.dia = dia;
        this.mes = mes; 
        this.ano = ano;
    }

    static getFecha(){
        var fecha = new Date();
        var dia = fecha.getDate();
        var mes = fecha.getMonth() + 1;
        var ano = fecha.getFullYear();

        var fechaActual = new Fecha(dia, mes, ano);
        return "Hoy es: " + fechaActual.dia + ", a mes: " + fechaActual.mes + " y año: " + fechaActual.ano;
    }
}

