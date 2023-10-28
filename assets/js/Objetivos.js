let datosEmer=document.querySelector('aside');
let emer=[
    "Riego adecuado: Asegúrate de regar las plantas de acuerdo a sus necesidades. Algunas requieren riego constante, mientras que otras prefieren menos agua.",

    "Conoce tus plantas: Investiga las necesidades específicas de cada planta en tu jardín, como la cantidad de luz solar, suelo y humedad que requieren.",

    "Evita el riego excesivo : El exceso de agua puede ser perjudicial. Asegúrate de que el suelo se seque entre riegos.",

    "Nutrición equilibrada : Usa fertilizantes adecuados y sigue las indicaciones para proporcionar a tus plantas los nutrientes necesarios.",

    "Suelo saludable : Asegúrate de que el suelo tenga buen drenaje y esté bien aireado. Agrega compost para mejorar la calidad del suelo.",

    "Poda regular : Recorta plantas para promover un crecimiento saludable y una forma atractiva.",

    "Control de plagas : Inspecciona regularmente tus plantas en busca de plagas y enfermedades. Trátalas a tiempo si es necesario.",

    "Mulching : Agrega una capa de mantillo alrededor de tus plantas para conservar la humedad y controlar las malas hierbas.",

    "Protección contra el frío : En climas fríos, cubre las plantas sensibles con tela o mantas durante las noches frías.",

    "Rotación de cultivos : Si tienes un huerto, rota tus cultivos anualmente para prevenir agotamiento del suelo y plagas específicas.",

    "Protección contra el viento : Protege las plantas delicadas del viento excesivo, que puede dañarlas.",

    "Apoyo para plantas trepadoras : Proporciona soportes y enrejados para las plantas trepadoras.",

    "Fomenta la biodiversidad : Planta una variedad de flores y plantas para atraer insectos beneficiosos y polinizadores.",

    "Eliminación de malas hierbas : Mantén el jardín libre de malas hierbas para reducir la competencia por nutrientes y agua.",

    "Control de la erosión : Evita la erosión plantando en pendientes y utilizando cobertura vegetal.",

    "Recolección adecuada : Recoge las frutas y verduras maduras a tiempo para evitar la sobremaduración y descomposición.",

    "Aliméntate de tu jardín : Disfruta de los productos de tu jardín y cultiva tus propios alimentos.",

    "Almacena herramientas adecuadamente : Limpia y guarda tus herramientas de jardinería después de usarlas para prolongar su vida útil.",

    "Compostaje : Aprovecha los residuos orgánicos para crear compost, que enriquecerá tu suelo de manera natural.",

    "Observación constante : Presta atención a tus plantas y al entorno para detectar cambios y problemas a tiempo.",
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
    cambioGrid.style.gridTemplateAreas = 'primero segundo';
});

function googleTranslateElementInit() {
	new google.translate.TranslateElement({pageLanguage: 'es', includedLanguages: 'es,ja,ru,de,it,fr,pt,ar,hi,en,ko', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, gaTrack: true}, 'google_translate_element');
        }