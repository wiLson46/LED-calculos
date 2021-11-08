/* js propinas y comensales */

var guardarFinal;

function funx() {

    var gasto = document.getElementById("inputGasto").value;
    var porcProp = document.getElementById("inputPorc").value;
    var finalProp = document.getElementById("montoProp");
    var finalConProp = document.getElementById("totalConProp");

    if (isNaN(gasto) === false && isNaN(porcProp) === false) {

        finalProp.value = gasto*porcProp/100;
        finalConProp.value = parseInt(gasto)+ parseInt(finalProp.value);
        guardarFinal = parseInt(finalConProp.value);

    } else {
        document.getElementById("alertaNO").classList.remove("d-none");
        setTimeout(() => { document.getElementById("alertaNO").classList.add("d-none") }, 7000);
    }

}

function funx2() {

    var comen = document.getElementById("cantComensales").value;
    var final = document.getElementById("totalPorComensal");

    final.value = parseInt(guardarFinal) / parseInt(comen);

}