/* --- Trayendo el display al usuario */
let show_01 = document.getElementById("activator_01");
show_01.addEventListener("click", appendDisplay);

function appendDisplay()
{
    console.log("El botoncito funciona");
    let display_01 = document.getElementById("main--form_sqr");
    display_01.setAttribute("style", "display:block; opacity:1; margin-top: 0px;");

    
}

/* --- Estructurando la funcion para calcular propiedades del Cuadrado */
let execute_01 = document.getElementById("main--form--button_01");
execute_01.addEventListener("click", squareFeatures);

function squareFeatures ()
{
    const squareSide = document.getElementById("main--form--output_01");
    side = parseInt(squareSide.value);
    sqResult_01 = side * 4;
    sqResult_02 = side ** 2;
    document.getElementById("main--form__divInteractivo__input01").innerHTML = sqResult_01;
    document.getElementById("main--form__divInteractivo__input02").innerHTML = sqResult_02;
}

/* --- Estructurando la funcion para calcular propiedades del Círculo */
let execute_02 = document.getElementById("main--form--button_02");
execute_02.addEventListener("click", circleFeatures);

function circleFeatures ()
{
    const radio = document.getElementById("main--form--output_01");
    diameter = parseInt(radio.value * 2);
    cqResult_01 = side * 4;
    cqResult_02 = side ** 2;
    document.getElementById("main--form__divInteractivo__input01").innerHTML = sqResult_01;
    document.getElementById("main--form__divInteractivo__input02").innerHTML = sqResult_02;
}