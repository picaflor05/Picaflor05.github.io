let datosEmer=document.querySelector('aside');
let emer=[
    "El respeto hacia los animales refleja nuestra humanidad.",
    "Los animales merecen vivir con dignidad y sin sufrimiento.",
    "La compasión hacia los animales es un signo de nobleza de espíritu.",
    "El amor por los animales es un acto de gratitud por la vida que compartimos.",
    "No somos los dueños de la Tierra, somos sus guardianes, junto con todas las criaturas que la habitan.",
    "Cada ser vivo tiene un papel en el equilibrio de la naturaleza, respetémoslo.",
    "La crueldad hacia los animales es un crimen contra la humanidad.",
    "La empatía hacia los animales nos hace mejores personas.",
    "Cada animal merece ser tratado con respeto, independientemente de su especie.",
    "La belleza de la naturaleza radica en su diversidad de vida.",
    "Los animales tienen el derecho a vivir sin temor ni sufrimiento.",
    "Cada vez que dañamos a un animal, dañamos a nuestro propio espíritu.",
    "Nuestra responsabilidad es proteger a los animales y su entorno.",
    "Los animales no pueden hablar por sí mismos, necesitan nuestra voz.",
    "El respeto hacia los animales es un legado que debemos dejar a las generaciones futuras.",
    "Cada animal es un ser único con sus propias necesidades y deseos.",
    "El maltrato a los animales es una afrenta a la compasión humana.",
    "Los animales son nuestros compañeros en este viaje por la Tierra.",
    "El respeto hacia los animales es un acto de justicia y bondad.",
    "Proteger a los animales es proteger nuestro propio futuro en un mundo compartido.",
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
    cambioGrid.style.gridTemplateAreas = ' "izquierda medio derecha" ';
});

function googleTranslateElementInit() {
	new google.translate.TranslateElement({pageLanguage: 'es', includedLanguages: 'es,ja,ru,de,it,fr,pt,ar,hi,en,ko', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, gaTrack: true}, 'google_translate_element');
        }