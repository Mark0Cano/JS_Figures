/* --- Trayendo el display al usuario */
let display = {
    'ds_01' : document.getElementById("main--form_sqr"),
    'ds_02' : document.getElementById("main--form_crl"), 
    'ds_03' : document.getElementById("main--form_trg"),
    'ds_04' : document.getElementById("main--form_pgn")
};

let showButton = {
    'btn_01' : document.getElementById("activator_01"),
    'btn_02' : document.getElementById("activator_02"), 
    'btn_03' : document.getElementById("activator_03"),
    'btn_04' : document.getElementById("activator_04")
};

showButton.btn_01.addEventListener("click", addIterator);
showButton.btn_02.addEventListener("click", addIterator);
showButton.btn_03.addEventListener("click", addIterator);
showButton.btn_04.addEventListener("click", addIterator);

function addIterator(evento)
{
    let userSelection;
    switch (evento.target.id)
    {
        case 'activator_01':
            console.log(evento.target.id);
            userSelection = "¡Un cuadrado!";
            setTimeout(() => 
            {
                display.ds_01.setAttribute("style", "opacity:1; margin-top: 0px;")
            }, 400);
            document.getElementById('container--parrafoInteractivo').innerHTML = userSelection;
            display.ds_02.setAttribute("style", "opacity:0; margin-top: 200px;");
            display.ds_03.setAttribute("style", "opacity:0; margin-top: 200px;");
            display.ds_04.setAttribute("style", "opacity:0; margin-top: 200px;");
            break;

        case 'activator_02':
            console.log(evento.target.id);
            userSelection = "¡Un círculo!";
            setTimeout(() => 
            {
                display.ds_02.setAttribute("style", "opacity:1; margin-top: 0px;")
            }, 400);
            document.getElementById('container--parrafoInteractivo').innerHTML = userSelection;
            display.ds_01.setAttribute("style", "opacity:0; margin-top: 200px;");
            display.ds_03.setAttribute("style", "opacity:0; margin-top: 200px;");
            display.ds_04.setAttribute("style", "opacity:0; margin-top: 200px;");
            break;

        case 'activator_03':
            console.log(evento.target.id);
            userSelection = "¡Un triángulo!";
            setTimeout(() => 
            {
                display.ds_03.setAttribute("style", "opacity:1; margin-top: 0px;")
            }, 400);
            document.getElementById('container--parrafoInteractivo').innerHTML = userSelection;
            display.ds_01.setAttribute("style", "opacity:0; margin-top: 200px;");
            display.ds_02.setAttribute("style", "opacity:0; margin-top: 200px;");
            display.ds_04.setAttribute("style", "opacity:0; margin-top: 200px;");
            break;

        case 'activator_04':
            console.log(evento.target.id);
            userSelection = "¡Un pentágono!";
            setTimeout(() => 
            {
                display.ds_04
                .setAttribute("style", "opacity:1; margin-top: 0px;")
            }, 400);
            document.getElementById('container--parrafoInteractivo').innerHTML = userSelection;
            display.ds_01.setAttribute("style", "opacity:0; margin-top: 200px;");
            display.ds_02.setAttribute("style", "opacity:0; margin-top: 200px;");
            display.ds_03.setAttribute("style", "opacity:0; margin-top: 200px;");
            break;
    }  
}

/* --- Llamando la función para analizar los parametros */
let execute = {
    'ex_01' : document.getElementById("main--form--button_01"),
    'ex_02' : document.getElementById("main--form--button_02"),
    'ex_03' : document.getElementById("main--form--button_03"),
    'ex_04' : document.getElementById("main--form--button_04")
} 
execute.ex_01.addEventListener("click", squareFeatures);
execute.ex_02.addEventListener("click", circleFeatures);
execute.ex_03.addEventListener("click", circleFeatures);
execute.ex_04.addEventListener("click", pentagonFeatures);



/* --- Estructurando la funcion para calcular propiedades del Cuadrado */
function squareFeatures()
{
    const squareSide = document.getElementById("main--form--output_01");
    side = parseInt(squareSide.value);
    sqResult_01 = side * 4;
    sqResult_02 = side ** 2;
    document.getElementById("main--form__divInteractivo__input01").innerHTML = sqResult_01;
    document.getElementById("main--form__divInteractivo__input02").innerHTML = sqResult_02;
}

/* --- Estructurando la funcion para calcular propiedades del Círculo */

function circleFeatures()
{
    const radio = document.getElementById("main--form--output_02");
    diameter = parseInt(radio.value * 2);
    cqResult_01 = diameter * Math.PI;
    cqResult_02 = Math.PI * (radio.value ** 2);
    document.getElementById("main--form__divInteractivo__input03").innerHTML = cqResult_01;
    document.getElementById("main--form__divInteractivo__input04").innerHTML = cqResult_02;
}

/* --- Estructurando la funcion para calcular propiedades del Círculo */

function pentagonFeatures()
{
    const pSide = document.getElementById("main--form--output_04");
    ap = parseInt(pSide.value / 1.45);
    pnResult_01 = pSide.value * 5;
    pnResult_02 = (pSide.value * 2 * ap)/2;
    document.getElementById("main--form__divInteractivo__input07").innerHTML = pnResult_01;
    document.getElementById("main--form__divInteractivo__input08").innerHTML = pnResult_02;
    console.log(ap);
}