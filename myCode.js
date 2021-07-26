/* --- Trayendo el display al usuario */

let figureCanvas = document.getElementById("mcDisplay");
let figureSplash = {
    'splash01' : document.getElementById('squareDraw'),
    'splash02' : document.getElementById('circleDraw')

};

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
/* - - - - -  Primer Activador  - - - - - */        
        case 'activator_01':
            userSelection = "¡Un cuadrado!";
            eraserFigureDraw();
            setTimeout(() => 
            {
                figureCanvas.setAttribute("style", "opacity:1; height: 300px;");
                document.getElementById('container--parrafoInteractivo').innerHTML = userSelection;
                display.ds_01.setAttribute("style", "opacity:1; margin-top: 0px;");
                
            }, 400);

            setTimeout(() =>
            {
                figureSplash.splash01.setAttribute("style", "opacity:1; margin-left: 0px;");
            }, 600
            );

            break;

/* - - - - -  Segundo Activador  - - - - - */        
        case 'activator_02':
            userSelection = "¡Un círculo!";
            eraserFigureDraw();
            setTimeout(() => 
            {
                figureCanvas.setAttribute("style", "opacity:1; height: 300px;");
                document.getElementById('container--parrafoInteractivo').innerHTML = userSelection;
            }, 400);
            setTimeout(() => 
            {
                display.ds_02.setAttribute("style", "opacity:1; margin-top: 0px;")
            }, 400);

            setTimeout(() => 
            {
                figureSplash.splash02.setAttribute("style", "opacity:1; margin-left: 0px;");
            }, 600);
            break;

/* - - - - -  Tercer Activador  - - - - - */        
        case 'activator_03':
            userSelection = "¡Un triángulo!";
            eraserFigureDraw();
            setTimeout(() => 
            {
                figureCanvas.setAttribute("style", "opacity:1; height: 300px;");
                document.getElementById('container--parrafoInteractivo').innerHTML = userSelection;
                display.ds_03.setAttribute("style", "opacity:1; margin-top: 0px;")
            }, 400);
            break;

/* - - - - -  Cuarto Activador  - - - - - */        
        case 'activator_04':
            userSelection = "¡Un pentágono!";
            eraserFigureDraw();
            setTimeout(() => 
            {
                figureCanvas.setAttribute("style", "opacity:1; height: 300px;");
                document.getElementById('container--parrafoInteractivo').innerHTML = userSelection;
                display.ds_04.setAttribute("style", "opacity:1; margin-top: 0px;");
            }, 400);
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
execute.ex_03.addEventListener("click", triangleFeatures);
execute.ex_04.addEventListener("click", pentagonFeatures);



/* --- Estructurando la funcion para calcular propiedades del Cuadrado */
function squareFeatures()
{
    const squareSide = document.getElementById("main--form--output_01");
    side = parseFloat(squareSide.value);
    sqResult_01 = side * 4;
    sqResult_02 = side ** 2;
    document.getElementById("main--form__divInteractivo__input01").innerHTML = parseFloat(sqResult_01).toFixed(1);
    document.getElementById("main--form__divInteractivo__input02").innerHTML = parseFloat(sqResult_02).toFixed(1);
}

/* --- Estructurando la funcion para calcular propiedades del Círculo */

function circleFeatures()
{
    const radio = document.getElementById("main--form--output_02");
    diameter = parseFloat(radio.value * 2);
    cqResult_01 = diameter * Math.PI;
    cqResult_02 = Math.PI * (radio.value ** 2);
    document.getElementById("main--form__divInteractivo__input03").innerHTML = parseFloat(cqResult_01).toFixed(1);
    document.getElementById("main--form__divInteractivo__input04").innerHTML = parseFloat(cqResult_02).toFixed(1);
}

/* --- Estructurando la funcion para calcular propiedades del Triángulo */

function triangleFeatures()
{
    const triSideA = document.getElementById("main--form--output_03B");
    const triSideB = document.getElementById("main--form--output_03C");
    const b = document.getElementById("main--form--output_03A");
    triHipotenusa = parseFloat(triSideA.value);
    sideDos = parseFloat(triSideB.value);
    if(triHipotenusa == sideDos)
    {
        
        base = parseFloat(b.value);
        cOpuesto = base / 2;
        cAdyacente = Math.sqrt((triHipotenusa ** 2) - (cOpuesto ** 2));
        trResult_01 = base + (triHipotenusa * 2);
        trResult_02 = (base * cAdyacente) / 2;
        document.getElementById("main--form__divInteractivo__input05").innerHTML = parseFloat(trResult_01).toFixed(1);
        document.getElementById("main--form__divInteractivo__input06").innerHTML = parseFloat(trResult_02).toFixed(1);
        console.log('Esto es mi hipotenusa ' + triHipotenusa);
        console.log('Esto es la base ' + base);
        console.log('Esto es el Cateto Opuesto' + cOpuesto);
    }
        else 
        {
            alert("Tu triangulo isóseles no tiene las medidas adecuadas >:v")
        }
    
}

/* --- Estructurando la funcion para calcular propiedades del Pentágono */

function pentagonFeatures()
{
    const pSide = document.getElementById("main--form--output_04");
    ap = parseFloat(pSide.value / 1.45);
    pnResult_01 = pSide.value * 5;
    pnResult_02 = (pSide.value * 2 * ap)/2;
    document.getElementById("main--form__divInteractivo__input07").innerHTML = parseFloat(pnResult_01).toFixed(1);
    document.getElementById("main--form__divInteractivo__input08").innerHTML = parseFloat(pnResult_02).toFixed(1);
    console.log(ap);
}


/* --- Funcion para limpiar el display */
function eraserFigureDraw()
    {
        figureCanvas.setAttribute("style", "opacity:0; height: 0;");
        display.ds_01.setAttribute("style", "opacity:0;");
        display.ds_02.setAttribute("style", "opacity:0;");
        display.ds_03.setAttribute("style", "opacity:0;");
        display.ds_04.setAttribute("style", "opacity:0;");
        setTimeout(() =>
            {
                figureSplash.splash01.setAttribute("style", "opacity:0; margin-left: -600px;");
                figureSplash.splash02.setAttribute("style", "opacity:0; margin-left: -600px;");
            }, 200
        );
    }
