import { nodeModuleNameResolver } from "typescript";

//A R R E G L O S

let nombres:string []=['Mario','Dario','Juan']

console.log(nombres);

nombres.push('Laura');

let datos:(boolean|number|string)[]=['Mario',23,true,'Lopez']

console.log(datos);

datos.push(200);    //push para agregar elementos a una lista
datos.push('Maria');
datos.push(false);
console.log(datos);
//-----------------------------------------------------------------------------------

//otro tipo de crear arreglos
let arreglo: Array<number>=[1,2,3,4]

const nombre1:string='datos1';

//I N T E R F A Z

//Una interfaz lo que hace es definir un patron y a partir de ella se definen los tipos de datos 

interface Alumno{
    /*Definir las propiedades/estructura de la interfaz
    La interfaz debe ser mapeada exactamente con las propiedades que tiene, 
    en el caso de que no quiera poner exactamente todas, 
    puede poner como opcional con un signo ? antes de los dos puntos*/
    matricula:string,
    nombre:string,
    edad:number,
    email:string,
    materias?:string[]
}

const alumno:Alumno={
    matricula:'D1234',
    nombre:'López',
    edad:23,
    email:'darilopez@gmail.com',
    materias:['Inglés']
}

alumno.nombre='Felipe'; //Modificar
console.log(alumno);  



