let datosEmer=document.querySelector('aside');
let emer=[
    "La igualdad de género es un derecho humano fundamental, y la violencia contra las mujeres nunca es justificable.",
    "Ninguna mujer merece ser maltratada física, emocional o psicológicamente. El respeto es esencial en todas las relaciones.",
    "El empoderamiento de las mujeres es la clave para construir un mundo sin violencia de género.",
    "La violencia contra las mujeres es un crimen que debe ser condenado y castigado con firmeza.",
    "La sociedad debe ser un lugar seguro para todas las mujeres, donde puedan vivir sin temor a la violencia.",
    "El silencio no protege a las víctimas, solo perpetúa la violencia. Debemos alzar la voz contra el abuso.",
    "Educar a las generaciones jóvenes sobre la igualdad de género y el respeto mutuo es la clave para prevenir la violencia contra las mujeres.",
    "No es el deber de las mujeres evitar la violencia, es responsabilidad de todos eliminarla de nuestra sociedad.",
    "La violencia de género no es un problema privado, es un problema de toda la sociedad que debemos abordar juntos.",
    "Las mujeres merecen vivir vidas libres de miedo, violencia y discriminación. Es hora de poner fin a la violencia de género de una vez por todas.",
];

let num=Math.round(Math.random()*(emer.length-1));
console.log(num);
if(num<emer.length){
let emeranun=document.createElement("div");
    emeranun.textContent=emer[num];
    datosEmer.appendChild(emeranun);
}

let cambioGrid = document.querySelector('main');

let boton=document.querySelector("button");
boton.addEventListener('click',()=>{
    datosEmer.style.display = 'none';
    cambioGrid.style.gridTemplateColumns = 'repeat(1,1fr)';
});


//*Abre el div menu*//
let abrirMenu=document.getElementById('menu');
let botonAbrir=document.getElementById('encuesta').querySelector('button');
botonAbrir.addEventListener('click',()=>{
    abrirMenu.style.visibility = "visible";
}
)

//*Cierra el div menu*//
let cerrarMenu=document.getElementById('menu');
let botonCerrar=document.getElementById('menu').querySelector("button");
botonCerrar.addEventListener('click',()=>{
    cerrarMenu.style.visibility = 'hidden';
});

//*Guarda los datos que introducimos en el div*//
let guardarDato=document.getElementById('menu');
let botonGuardar=document.getElementById('guardar').querySelector("button");
botonGuardar.addEventListener('click',()=>{
    guardarDato.style.visibility = 'hidden';
});

function googleTranslateElementInit() {
	new google.translate.TranslateElement({pageLanguage: 'es', includedLanguages: 'es,ja,ru,de,it,fr,pt,ar,hi,en,ko', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, gaTrack: true}, 'google_translate_element');
        }