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

let fecha1 = new Fecha(2,3,456);
let fecha2 = new Fecha(6,11,789);
let fecha3 = new Fecha(7,9,123);
let fecha4 = new Fecha(16,8,2000);
let fecha5 = new Fecha(30,6,3098);
let fecha6 = new Fecha(12,10,1492);