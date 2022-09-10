console.log("Hola mundo, wasaaaa");

//Definir variables
var t1:number | string =3;            //Variable que afecta el modo de accesibilidad a la variable, me permite modificarla
    //Aceptar variables de tipo numericas
let t2:number | string =2;            //Solamente va a existir dentro del lugar dónde se declara, no existe fuera de la función
let activo:boolean=false;
const t3=666;                           //Es una constante, una vez que la declaras ya no te deja cambiarla

t1='www';

t2='www';

console.log(t1);

console.log(t2);

