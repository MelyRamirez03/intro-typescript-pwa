// DESESTRUCTURACIÓN DE FUNCIONES

export interface Producto{
    desc:string;
    precio:number;
}

const telefono:Producto={
    desc:'Noki',
    precio:2345
}

const tablet:Producto={
    desc:'Ipad Air',
    precio:25739
}

function calcularIva(productos:Producto[]):number{
    let total = 0;
    productos.forEach((producto)=>{ //Es un for para recorrer todos los elementos de objetos o arreglos
        total+=producto.precio;
    })
    return total*0.16;
}

const articulos1=[telefono,tablet];
const IVATot=calcularIva(articulos1);
console.log(`IVA: ${IVATot}`);


export function calcularIva2(productos:Producto[]):[number,number]{
    let total=0;
    productos.forEach(({precio})=>{
        total+=precio;
    })

    return [total, total*0.16];
}

const articulos2=[telefono,tablet];
const [total,iva]=calcularIva2(articulos2);
console.log(`Total: ${total} \n IVA: ${iva}`);