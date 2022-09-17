interface Direccion{
    calle:string;
    pais:string;
    estado:string;
}

interface AlumnoUTL{
    nombre: string;
    edad: number;
    direccion:Direccion;
    mostrarDireccion();
}

const alumnoUT:AlumnoUTL={
    nombre: 'Mario',
    edad: 23,
    direccion:{
        calle:'Veracruz',
        pais:'MX',
        estado:'GTO'
    },
    mostrarDireccion(){
        return this.nombre+', '+this.direccion.estado+', '+this.direccion.pais;
    }
}

const direccion=alumnoUT.mostrarDireccion();
console.log(alumnoUT,direccion);



