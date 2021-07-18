/* --- Estructurando la funcion para calcular propiedades del Cuadrado */
const squareSide = prompt("Igresa el lado");
 
function squarePerimeter (side)
{
    side = parseInt(squareSide);
    return side * 4
}

function squareArea (side)
{
    side = parseInt(squareSide);
    return side ** 2
}

const squareResultA = squarePerimeter();
const squareResultB = squareArea();
alert(squareResultA);
alert(squareResultB);

/* --- Estructurando la funcion para calcular propiedades del Triánguño */