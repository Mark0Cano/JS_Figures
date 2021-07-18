/* --- Estructurando la funcion para calcular propiedades del Cuadrado */
let execute = document.getElementById("main--form--button");
execute.addEventListener("click", squareFeatures);

function squareFeatures (side)
{
    const squareSide = document.getElementById("main--form--output_01");
    side = parseInt(squareSide.value);
    sqResult_01 = side * 4;
    sqResult_02 = side ** 2;
    document.getElementById("main--form__divInteractivo__input01").innerHTML = sqResult_01;
    document.getElementById("main--form__divInteractivo__input02").innerHTML = sqResult_02;
}

/* --- Estructurando la funcion para calcular propiedades del Triánguño */