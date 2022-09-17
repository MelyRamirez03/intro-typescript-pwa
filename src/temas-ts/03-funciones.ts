//M A N E J O  D E  F U N C I O N E S

/*function sumar(a,b){
    return a+b;
}
---------------------------------------------------------------
function sumar(a:number,b:number):number{
    return a+b;
}

console.log(sumar(2,3));
--------------------------------------------------------------
function sumar(a:number):number{
    return a+a;
}

console.log(sumar(5));
--------------------------------------------------------------

function sumar(a:number,b:number,c?:number):number{
    if(c){
        return a+b+c;
    }
    else{
        return a+b;
    }
}
-------------------------------------------------------------
function sumar(a:number,b:number,c:number=0):number{
        return a+b+c;
}

console.log(sumar(5,3));
console.log(sumar(5,3,7));*/

function sumar(a:number,b:number,c:number=0):void{
    console.log(a+b+c);
}

console.log(sumar(2,2,2));

function multiplicar (numero:number, otronumero?:number, base:number=2): number{
    return numero*base;
}

const resultado=multiplicar(5,0,4);
console.log(resultado);

interface Alumno2{
    nombre: string;
    edad:number;
    muestraEdad:()=>void;
}

function cursar(alumno:Alumno2, nuevaEdad:number):void{
    alumno.edad+=nuevaEdad;
    console.log(alumno);
}

const nuevoAlumno:Alumno2={
    nombre:'Daniel',
    edad:22,
    muestraEdad(){
        console.log('Edad de alumno: ',this.edad);
    }
}

console.log(nuevoAlumno,28);





