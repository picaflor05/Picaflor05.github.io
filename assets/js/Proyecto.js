let datosEmer=document.querySelector('aside');
let emer=[
    "La naturaleza nos brinda vida, cuidarla es nuestra responsabilidad.",
"Proteger a los animales y las plantas es preservar el equilibrio de la vida.",
"Cada ser vivo en la Tierra merece respeto y cuidado.",
"Las plantas y los animales son esenciales para nuestro bienestar; protejámoslos.",
"La biodiversidad es un tesoro que debemos conservar para las generaciones futuras.",
"Un mundo sin animales y plantas sería un mundo más pobre.",
"Cada especie extinguida es una pieza perdida del rompecabezas de la vida.",
"La belleza de la naturaleza radica en su diversidad; protejámosla.",
"La tierra no nos pertenece, la hemos heredado de las futuras generaciones.",
"Reducir, reutilizar y reciclar ayuda a conservar recursos naturales.",
"Cuida tu entorno y enseña a otros a hacer lo mismo.",
"Los ecosistemas saludables son la base de la vida en la Tierra.",
"Las pequeñas acciones diarias pueden marcar la diferencia en la protección de nuestro planeta.",
"El cambio climático afecta a animales y plantas, cuidar el medio ambiente es vital para ellos.",
"La deforestación amenaza a muchas especies; plantar árboles es una forma de ayudar.",
"La contaminación del agua perjudica a la vida acuática; usemos responsablemente este recurso.",
"Apoyemos la conservación de hábitats naturales y áreas protegidas.",
"Evitemos la caza furtiva y el tráfico ilegal de especies silvestres.",
"La agricultura sostenible y la pesca responsable son clave para la protección de la vida silvestre.",
"Juntos, podemos ser guardianes de la Tierra y sus habitantes.",
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
    cambioGrid.style.gridTemplateAreas = '"arriba arriba arriba""izquierda medio derecha""mediz medmed medder"';
});

function googleTranslateElementInit() {
	new google.translate.TranslateElement({pageLanguage: 'es', includedLanguages: 'es,ja,ru,de,it,fr,pt,ar,hi,en,ko', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, gaTrack: true}, 'google_translate_element');
        }