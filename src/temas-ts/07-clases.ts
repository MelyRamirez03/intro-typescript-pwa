// C L A S E S

class Persona{ //Public private
    private nombre: string; //No es necesario poner public porque por defecto ya es
    private edad:number;    //Private solo me permite usarlos dentro de la clase
    constructor(a:string,b:number){ //Método especial para inicializar las clases
        this.nombre=a,
        this.edad=b
    }

    //Atraer los private
    setNombre(a:string){
        this.nombre=a;
    }

    setEdad(b:number){
        this.edad=b;
    }

    private imprimePersona(){
        console.log(`Nombre: ${this.nombre}\nEdad:${this.edad}`)
    }

    metodoAlterno(){
        this.imprimePersona();
    }
}

let persona1:Persona;
persona1=new Persona('Danna',20); //Crear un objeto

let persona2=new Persona('Laura',19); //Otra forma de crearlo

//persona1.nombre='Mario';
//persona1.edad=20;
persona1.setNombre('Mario');
persona1.setEdad(20);
//persona1.imprimePersona();
//persona2.imprimePersona();
persona1.metodoAlterno();
persona2.metodoAlterno();


class Dado{
    private valor:number;
    public tirar(){
        this.generar();
    }
    private generar(){
        this.valor=Math.floor(Math.random()*6)+1;
    }
    imprimir(){
        console.log(`Salio el valor: ${this.valor}`);
    }
}

let dado1 = new Dado();
dado1.tirar();
dado1.imprimir();