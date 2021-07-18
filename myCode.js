/* --- Estructurando la funcion para calcular propiedades del Cuadrado */
let execute = document.getElementById("main--form--button");
execute.addEventListener("click", squarePerimeter);

function squarePerimeter (side)
{
    const squareSide = document.getElementById("main--form--output_01");
    side = parseInt(squareSide.value);
    sqResult = side * 4;
    document.getElementById("main--form__divInteractivo__input01").innerHTML = sqResult;
    
    console.log(sqResult);
}

function squareArea (side)
{
    side = parseInt(squareSide);
    return side ** 2
}


/* --- Estructurando la funcion para calcular propiedades del Triánguño */