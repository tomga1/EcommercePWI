alert("Hola soy Tomas Garcia");

let nombre = "Tomas";
let apellido = "Garcia";
let nombre_completo = nombre + " " + apellido;

const altura = 100 ; 

console.log(nombre_completo)

let datos = document.querySelector("#datos");
datos.innerHTML = `
    <h1>Hola soy ${nombre_completo}</h1>
    <h1>Mido: ${altura}</h1>
`;

if(altura >=185){
    datos.innerHTML += "<h1> Eres una persona alta</h1>";
}
else{
    datos.innerHTML += "<h1> NO Eres una persona alta</h1>";
}

for(let year= 2000 ; year <= 2023 ; year ++)