function fn1() {
    var ahorro = parseInt(document.getElementById("ingreso1").value);
    var porcentaje = parseInt(document.getElementById("ingreso2").value);
    var meses = parseInt(document.getElementById("ingreso3").value);

    ahorroInic = ahorro;

    document.getElementById("resultado1").value = "Ingreso consistente mensual: $" + ahorro.toFixed(2);
    document.getElementById("resultado2").value = "Interes mensual: " + porcentaje + "%";
    document.getElementById("resultado3").value = "Total de meses: " + meses;


    var acum = ahorro;

    for (i = 0; i < meses; i++) {

        var aux = 0;

        aux = aux + ahorro + (ahorro * porcentaje / 100);
        acum = aux + acum;

        ahorro = aux;

    };

    var ganancia = acum - (ahorroInic * meses);
    var sinGanancia = ahorroInic * meses;

    document.getElementById("resultado4").value = "Total sin ganancia: $" + sinGanancia.toFixed(2);
    document.getElementById("resultado5").value = "Total ganancia: $" + ganancia.toFixed(2);
    document.getElementById("resultado6").value = "Total acumulado: $" + acum.toFixed(2);

};

function fn2() {
    document.getElementById("ingreso1").value = "";
    document.getElementById("ingreso2").value = "";
    document.getElementById("ingreso3").value = "";
};

function fn3() {
    document.getElementById("resultado1").value = "";
    document.getElementById("resultado2").value = "";
    document.getElementById("resultado3").value = "";
    document.getElementById("resultado4").value = "";
    document.getElementById("resultado5").value = "";
    document.getElementById("resultado6").value = "";
};