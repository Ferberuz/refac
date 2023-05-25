/* Renderiza toda la funcionalidad de la app. */
const objeto = {
    Nombre: 'Ruben',
    SegundoNombre: 'Ulianov',
    ApellidoPaterno: 'Blanco',
    ApellidoMaterno: 'Chavarria',
    Edad: '24'
}

for (const property in objeto){
    console.log(`${property}:${objeto[property]}`);
}
/* let obj = Object.values(objeto);
let obj2 = Object.entries(objeto);

console.log(obj2);

for(let i = 0 ; i< obj.length; i++ ){
    console.log(obj[i]);
} */